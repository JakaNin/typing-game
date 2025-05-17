import Line from "components/commons/SeparateLine";
import Typography from "components/commons/Typography";

import Form from "./_components/Form";

const Contact = async () => {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex flex-col items-start bg-ap-transparentWhite-300 py-8 px-6 gap-6 w-full sm:w-1/2 mx-4 sm:mx-0">
        <Typography variant="title1" className="text-3xl sm:text-4xl">
          お問い合わせ
        </Typography>
        <div className="flex flex-col gap-2">
          <Typography>
            何かご不明な点がございましたら、以下のフォームからお気軽にお問い合わせください。
          </Typography>
        </div>

        <Line />

        <Form />
      </div>
    </div>
  );
};

export default Contact;
