import { Image } from "react-bootstrap";

interface Props {
  url: string;
}

const AppImage: React.FC<Props> = ({ url }) => {
  /*let comp = <span />;
  check(url)
    .then((status) => {
      comp =
        200 == status ? (
          <Image src={url} thumbnail style={{ width: 180, height: 180 }} />
        ) : (
          <span />
        );
    })
    .finally(
      () =>
        (comp = (
          <Image src={url} thumbnail style={{ width: 180, height: 180 }} />
        ))
    );
    console.log("------>" + comp.type);
    return comp;*/
  return <Image src={url} thumbnail style={{ width: 180, height: 180 }} />;
};

async function check(url: string) {
  return (await fetch(url)).status;
}
export default AppImage;
