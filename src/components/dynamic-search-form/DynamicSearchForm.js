import React, { useCallback } from "react";
import { Formik, Field, Form, FieldArray } from "formik";
import debounce from "lodash/debounce";
import { ErrorMessage } from "formik";
import { Button, Form as BootstrapForm, Alert } from "react-bootstrap";

const DynamicSearchForm = ({ setSearchValues, setDebounceStatus }) => {
  const debouncedHandleSearchChange = useCallback(
    debounce((values) => {
      setDebounceStatus(values);
      console.log("Debounced Values:", values);
    }, 300),
    [setDebounceStatus]
  );

  return (
    <Formik
      initialValues={{ search: [""] }}
      onSubmit={(values) => {
        setSearchValues(values);
        console.log("Form submitted:", values);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <FieldArray name="search">
            {({ push, remove }) => (
              <div className="container text-center justify-content-center">
                {values.search.map((_, index) => (
                  <div key={index} className="row gx-5">
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label className="mx-1" htmlFor={`search[${index}]`}>
                        Search Criteria {index + 1}
                      </BootstrapForm.Label>
                      <Field
                        name={`search[${index}]`}
                        placeholder="Search"
                        onChange={(e) => {
                          const newValues = [...values.search];
                          newValues[index] = e.target.value;
                          setFieldValue(`search[${index}]`, e.target.value);
                          debouncedHandleSearchChange(newValues);
                        }}
                        className="mx-5"
                      />
                      <Button
                        type="button"
                        onClick={() => remove(index)}
                        className="btn btn-danger mx-5"
                      >
                        Remove
                      </Button>
                      <ErrorMessage name={`search[${index}]`} component={Alert} variant="danger" />
                    </BootstrapForm.Group>
                  </div>
                ))}
                <Button type="button" onClick={() => push("")} className="btn btn-success">
                  Add Search Criteria
                </Button>
                &nbsp;
                <Button type="submit" className="btn btn-primary">
                  Search Result
                </Button>
              </div>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  );
};

export default DynamicSearchForm;
