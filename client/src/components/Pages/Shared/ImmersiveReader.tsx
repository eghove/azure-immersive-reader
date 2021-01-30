// Modified the implementation show here : https://github.com/sinyaa/immersive-reader/blob/master/src/immersive-reader.tsx
import { launchAsync } from "@microsoft/immersive-reader-sdk";
import Button from "react-bootstrap/Button";
export interface ImmersiveReaderProps {
  title: string;
  text: string;
  accessToken: string;
  subdomain: string;
}

const ImmersiveReader = (props: ImmersiveReaderProps) => {
  // build the data
  const contentData = {
    title: props.title,
    chunks: [
      {
        content: props.text,
        lang: "en-us",
        mimeType: "text/plain",
      },
    ],
  };

  // wrapper function for launchAsync
  const launchImmersiveReader = () => {
    launchAsync(props.accessToken, props.subdomain, contentData).catch(
      (error: any) => {
        console.log("Error launching the Immersive Reader.");
        console.log(error);
      }
    );
  };

  //TODO : figure out a way to incorporate the original logo so it doesn't disappear on re-render.
  return <Button onClick={launchImmersiveReader}>Immersive Reader</Button>;
};

export default ImmersiveReader;
