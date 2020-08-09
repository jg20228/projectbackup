import React from "react";
import Carousel from "nuka-carousel";
import imgA from "./img/item1.png";
import imgB from "./img/item2.png";
import imgC from "./img/item3.png";
import imgD from "./img/main_review1.jpg";
import imgE from "./img/main_review2.jpg";
import { Grid, Paper } from "@material-ui/core";

const Product = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Paper>
            <Carousel
              wrapAround={true}
              autoplay={true}
              autoplayInterval={4000}
              speed={2000}
              slidesToShow={3}
              slideWidth={1}
              withoutControls={true}
            >
              <img src={imgA}>
                <div>1234</div>
              </img>
              <img src={imgB} />
              <img src={imgC} />
              <img src={imgA} />
              <img src={imgB} />
              <img src={imgC} />
            </Carousel>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <Carousel
              wrapAround={true}
              autoplay={true}
              autoplayInterval={4000}
              speed={2000}
              slidesToShow={1}
              slideWidth={1}
              withoutControls={true}
            >
              <img src={imgD} />
              <img src={imgE} />
            </Carousel>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Product;
