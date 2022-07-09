import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { ForwardedRef, forwardRef, useState } from "react";

type FormFieldProps = {
  label: string;
  id: string;
  helperText: string;
  errorText: string;
  type: string;
};

const FormField = forwardRef(
  (
    { label, id, helperText, errorText, type }: FormFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isTouched, setIsTouched] = useState(false);
    const [input, setInput] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    };

    const isError = input === "";

    return (
      <FormControl className="mb-3" isInvalid={isError && isTouched}>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <Input
          onBlur={() => {
            setIsTouched(true);
          }}
          className="ring-1 ring-primary-default"
          id={id}
          type={type}
          value={input}
          ref={ref}
          onChange={handleInputChange}
        />
        {isError && isTouched ? (
          <FormErrorMessage>{errorText}</FormErrorMessage>
        ) : (
          <FormHelperText>{helperText}</FormHelperText>
        )}
      </FormControl>
    );
  }
);

export default FormField;
