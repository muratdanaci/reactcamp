import { Field, Form, Formik } from "formik";
import React from "react";
import { Button, FormField } from "semantic-ui-react";
import { object, string, number } from "yup";

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
          <FormField>
            <Field name="title" placeholder="Ürün Adı" />
          </FormField>
          <FormField>
            <Field name="price" placeholder="Ürün Fiyatı" />
          </FormField>
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
