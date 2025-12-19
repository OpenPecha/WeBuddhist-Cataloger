import { Link } from "react-router-dom";
import { Book, Globe } from "lucide-react";
import type { OpenPechaText } from "@/types/text";
import { Badge } from "./ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { useTranslation } from "react-i18next";
import { getLanguageColor, getLanguageLabel } from "@/utils/getLanguageLabel";

interface TextListCardProps {
  text: OpenPechaText;
}
const TextListCard = ({ text }: TextListCardProps) => {
  const { t } = useTranslation();

  const getTypeLabel = (type: string): string => {
    const labels: Record<string, string> = {
      root: t("textsPage.rootText"),
      translation: t("textsPage.translation"),
      commentary: t("textsPage.commentary"),
      none: "No Aligned Text",
    };
    return labels[type] || type;
  };

  const getTypeColor = (type: string): string => {
    const colors: Record<string, string> = {
      root: "bg-purple-100 text-purple-800",
      translation: "bg-green-100 text-green-800",
      commentary: "bg-yellow-100 text-yellow-800",
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 gap-2 ">
      <CardHeader>
        <div className="flex items-center gap-2 overflow-hidden">
          <Book className="w-5 h-5 text-gray-500 shrink-0" />
          <CardTitle className="text-lg w-full ">
            <Link
              to={`/texts/${text.id}/instances`}
              className="w-full transition-colors duration-200 truncate text-2xl text-neutral-700 hover:text-blue-500 "
            >
              {text.title?.[text.language] || t("textsPage.untitled")}
            </Link>
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <Badge
            className={`${getTypeColor(text.type)} flex items-center gap-2`}
          >
            <Book className="w-4 h-4" />
            <span className="font-medium">{getTypeLabel(text.type)}</span>
          </Badge>
        </div>
        {text.language && (
          <div className="pt-3 flex items-center justify-between gap-2 border-t border-gray-100 relative">
            <Badge
              className={`${getLanguageColor(
                text.language
              )} flex items-center gap-2`}
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">
                {getLanguageLabel(text.language)}
              </span>
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TextListCard;
