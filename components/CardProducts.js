import Link from "next/link";
import React, { useEffect } from "react";
import { Button, Card,Image } from "react-bootstrap";

function CardProducts({ categories }) {
  useEffect(() => {}, []);
  return (
    <div className="contentCategories" >
      {categories.map((c, i) => {
        return (
          <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "300px",
            height: "300px",
            float: "left",
            padding: "10px",
            borderRadius: "300px",        
          }}
          key={i}
        >
          <Card style={{ width: "18rem" }}>
            <Image variant="top" src={c.img && c.img} alt={'imagen'} />
            <Card.Body>
              <Card.Title style={{textTransform: 'uppercase'}}>{c.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link href="/productos/[id]" as={`/productos/${c.tag}`} key={i}>
                <Button variant="primary">{c.name}</Button>
              </Link>
            </Card.Body>
          </Card>
          </div>
        );
      })}
    </div>
  );
}

export default CardProducts;
