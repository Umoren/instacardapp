import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Content } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContentUpdateFormInputValues = {
    source?: string;
    type?: string;
};
export declare type ContentUpdateFormValidationValues = {
    source?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContentUpdateFormOverridesProps = {
    ContentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    source?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ContentUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    content?: Content;
    onSubmit?: (fields: ContentUpdateFormInputValues) => ContentUpdateFormInputValues;
    onSuccess?: (fields: ContentUpdateFormInputValues) => void;
    onError?: (fields: ContentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContentUpdateFormInputValues) => ContentUpdateFormInputValues;
    onValidate?: ContentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContentUpdateForm(props: ContentUpdateFormProps): React.ReactElement;
