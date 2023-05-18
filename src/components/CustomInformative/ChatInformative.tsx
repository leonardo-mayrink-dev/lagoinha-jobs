import QuestionAnswerOutlined from "@mui/icons-material/QuestionAnswerOutlined";
import { CustomInformative } from "./CustomInformative";

export function ChatInformative() {
  // use axios get generic method to get data and display in this custom component
  // you can create other components like this one in case you need a custom behavior 
  return (
    <CustomInformative
      title={"number"}
      value="150GB"
      icon={<QuestionAnswerOutlined fontSize="medium" color="secondary" />}
      category="Updated Now"
    />
  );
}
