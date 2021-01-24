// Modified the implementation show here : https://github.com/sinyaa/immersive-reader/blob/master/src/immersive-reader.tsx
import { launchAsync } from "@microsoft/immersive-reader-sdk";

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

  return (
    <button
      className="immersive-reader-button"
      onClick={launchImmersiveReader}
      data-button-style="iconAndText"
    ></button>
  );
};

export default ImmersiveReader;
