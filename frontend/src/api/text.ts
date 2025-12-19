
const API_URL = '/api';
import type { OpenPechaText, OpenPechaTextInstance, Annotations } from '../types/text';


// Helper function to handle API responses with better error messages
const handleApiResponse = async (response: Response, customMessages?: { 400?: string; 404?: string; 500?: string }) => {
  if (!response.ok) {
    // Try to parse error response
    const contentType = response.headers.get('content-type');
    let errorMessage = '';

    if (contentType && contentType.includes('application/json')) {
      try {
        const errorData = await response.json();
        const rawMessage = errorData.detail || errorData.details || errorData.message || errorData.error;
        
        // If detail is a JSON string, parse it to extract the actual error message
        // Format: detail = "{\"error\":\"Translation must have a different language...\"}"
        if (rawMessage && typeof rawMessage === 'string') {
          const trimmedMessage = rawMessage.trim();
          
          // Try to parse as JSON if it looks like a JSON string
          try {
            const parsed = JSON.parse(trimmedMessage);
            if (parsed.error) {
              errorMessage = parsed.error;
            } else if (parsed.detail) {
              // Nested detail field
              try {
                const nestedParsed = JSON.parse(parsed.detail.trim());
                errorMessage = nestedParsed.error || parsed.detail.trim();
              } catch {
                errorMessage = parsed.detail.trim();
              }
            } else {
              errorMessage = trimmedMessage;
            }
          } catch {
            // If parsing fails, use the raw message as is
            errorMessage = trimmedMessage;
          }
        } else {
          errorMessage = rawMessage || '';
        }
      } catch {
        // If JSON parsing fails, ignore and use default message
      }
    }

    // Use backend error message if available, otherwise fall back to custom messages or defaults
    switch (response.status) {
      case 404:
        throw new Error(errorMessage || customMessages?.['404'] || 'The requested resource was not found. It may have been deleted or the link is incorrect.');
      case 500:
      case 502:
      case 503:
        throw new Error(errorMessage || customMessages?.['500'] || 'The server is experiencing issues. Please try again later.');
      case 400:
        throw new Error(errorMessage || customMessages?.['400'] || 'Invalid request. Please check your data and try again.');
      case 401:
        throw new Error(errorMessage || 'You are not authorized to access this resource.');
      case 403:
        throw new Error(errorMessage || 'Access to this resource is forbidden.');
      default:
        throw new Error(errorMessage || `An error occurred while connecting to the server (Error ${response.status}).`);
    }
  }

  // Check if response is JSON
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return await response.json();
  } else {
    throw new Error('The server returned an invalid response. Please contact support if this persists.');
  }
};


// Real API function for Texts
export const fetchTexts = async (params?: { limit?: number; offset?: number; language?: string; author?: string }): Promise<OpenPechaText[]> => {
  const queryParams = new URLSearchParams();
  if (params?.limit) queryParams.append('limit', params.limit.toString());
  if (params?.offset) queryParams.append('offset', params.offset.toString());
  if (params?.language) queryParams.append('language', params.language);
  if (params?.author) queryParams.append('author', params.author);
  
  const queryString = queryParams.toString();
  const url = queryString ? `${API_URL}/text?${queryString}` : `${API_URL}/text?limit=20`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  return data.results || data || [];
};
export const fetchText = async (id: string): Promise<OpenPechaText> => {
  const response = await fetch(`${API_URL}/text/${id}`);
  return response.json();
};

export const fetchTextInstances = async (id: string): Promise<OpenPechaTextInstance[]> => {
  const response = await fetch(`${API_URL}/text/${id}/instances`);
  const data = await response.json();
  return Array.isArray(data) ? data : [data];
};

export const fetchInstance = async (id: string): Promise<OpenPechaTextInstance> => {
  const response = await fetch(`${API_URL}/text/instances/${id}?annotations=true`);
  return response.json();
};

export const fetchAnnotation = async (id: string): Promise<Annotations> => {
  const response = await fetch(`${API_URL}/v2/annotations/${id}`);
  return response.json();
};


export const fetchTextsByTitle = async (title: string)=> {
  try {
    const response = await fetch(`${API_URL}/text/title-search?title=${title}`);
    return await handleApiResponse(response);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    return [];
  }
};
