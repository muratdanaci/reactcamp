import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  let { title } = useParams();

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProductsByName(title)
      .then((result) => setProduct(result.data.products[0]))
      .catch((error) => {
        console.error("Error in fetching products:", error);
      });
  }, [title]);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
							alt={product.title}
              size="large"
              src={product.thumbnail}
              rounded
              style={{ marginBottom: ".5em" }}
            />
            <Card.Header>{product.title}</Card.Header>
            <Card.Meta>{product.category}</Card.Meta>
            <Card.Description>{product.description}</Card.Description>
            <Card.Description>{product.price}$</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button color="green">Sepete Ekle</Button>
              <Button color="red">Favorilere Ekle</Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
