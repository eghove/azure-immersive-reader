// Modified the implementation show here : https://github.com/sinyaa/immersive-reader/blob/master/src/immersive-reader.tsx
import { launchAsync } from "@microsoft/immersive-reader-sdk";
// Bootstrap imports
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export interface ImmersiveReaderProps {
  title: string;
  text: string;
  accessToken: string;
  subdomain: string;
  azCredError: boolean;
}

const ImmersiveReader = (props: ImmersiveReaderProps) => {
  // build the data
  const contentData = {
    title: props.title,
    chunks: [
      {
        content: props.text,
        lang: "en-us",
        mimeType: "text/html",
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
    <>
      <OverlayTrigger
        placement={"right"}
        overlay={
          <Tooltip id={"right-tooltip"}>
            Click here to launch the Azure Immersive Reader.
          </Tooltip>
        }
      >
        <Button onClick={launchImmersiveReader} disabled={props.azCredError}>
          Immersive Reader
        </Button>
      </OverlayTrigger>
    </>
  );
};

export default ImmersiveReader;
