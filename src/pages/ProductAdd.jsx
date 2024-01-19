import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Button, FormField, Label } from "semantic-ui-react";
import { object, string, number } from "yup";
import MdTextInput from "../utilities/customFormControls/MdTextInput";

export default function ProductAdd() {
  const initialValues = { title: "", price: 10 };
  const schema = object({
    title: string().required("Ürün Adı Zorunlu!"),
    price: number().required("Ürün Fiyatı Zorunlu!"),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <MdTextInput name="title" placeholder="Ürün Adı" />
          <MdTextInput name="price" placeholder="Ürün Fiyatı" />
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
