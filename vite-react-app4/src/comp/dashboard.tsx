import { SetStateAction, useEffect, useState } from "react";
import { ICartoon } from "../service/CartoonSvc";
import { Container, Stack, Image } from "react-bootstrap";
import AppImage from "./common/AppImage";
import { useDeps } from "./common/ServiceProvider";

const DashBoard = () => {
  const [data, setData] = useState<ICartoon[]>([]);
  const { cartoonSvc } = useDeps();

  useEffect(() => {
    cartoonSvc().then((d: SetStateAction<ICartoon[]>) => setData(d));
  }, [cartoonSvc]);
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
