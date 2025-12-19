import {
  Book,
  CheckCircleIcon,
  CircleXIcon
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getLanguageLabel } from "@/utils/getLanguageLabel";

interface TextCardProps {
  title: string;
  titleTibetan?: string;
  language: string;
  type: string;
  author?: string;
  date?: string;
  bdrcId?: string;
  isAnnotationAvailable?: boolean;
  instanceId: string;
  sourceInstanceId: string;
}

const TextCard = ({
  title,
  titleTibetan,
  language,
  type,
  isAnnotationAvailable,
}: TextCardProps) => {
  return (
    <Card className="hover:shadow-elegant transition-smooth cursor-pointer group h-full justify-between pointer-events-auto">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1  ">
            <CardTitle className="text-lg mb-2 group-hover:text-blue-500 transition-smooth">
              {title}
            </CardTitle>
            {titleTibetan && (
              <p className="text-sm tibetan-text text-muted-foreground mb-3">
                {titleTibetan}
              </p>
            )}
          </div>
          <Book className="w-5 h-5 text-muted-foreground group-hover:text-blue-500 transition-smooth" />
        </div>

        <div className="flex flex-wrap gap-2"></div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between gap-2 text-xs text-muted-foreground ">
          <div className="flex items-center gap-1">
            <Badge className="bg-green-100 text-green-800 capitalize">
              {getLanguageLabel(language)}
            </Badge>
            <Badge variant="outline" className=" capitalize">
              {type}
            </Badge>
          </div>
          {isAnnotationAvailable ? (
            <CheckCircleIcon className="w-4 h-4 text-green-500" />
          ) : (
            <CircleXIcon className="w-4 h-4 text-red-500" />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TextCard;
