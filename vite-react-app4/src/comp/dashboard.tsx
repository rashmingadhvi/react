import { useEffect, useState } from "react";
import CartoonSvc, { ICartoon } from "../service/CartoonSvc";
import { Container, Stack, Image } from "react-bootstrap";
import AppImage from "./common/AppImage";

const DashBoard = () => {
  const [data, setData] = useState<ICartoon[]>([]);
  useEffect(() => {
    CartoonSvc().then((d) => setData(d));
  }, []);
  return (
    <>
      <h1>This is dashboard of Cartoons: {data.length}</h1>
      <Container>
        <Stack gap={3}>
          {data.map((d) => (
            <div className="p-2" key={d.id}>
              {d.title} <p />
              <AppImage url={d.image} />
            </div>
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default DashBoard;
