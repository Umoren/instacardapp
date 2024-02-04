import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type TimelineItemCreateFormInputValues = {
    description?: string;
    postTime?: string;
};
export declare type TimelineItemCreateFormValidationValues = {
    description?: ValidationFunction<string>;
    postTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TimelineItemCreateFormOverridesProps = {
    TimelineItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    postTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TimelineItemCreateFormProps = React.PropsWithChildren<{
    overrides?: TimelineItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TimelineItemCreateFormInputValues) => TimelineItemCreateFormInputValues;
    onSuccess?: (fields: TimelineItemCreateFormInputValues) => void;
    onError?: (fields: TimelineItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TimelineItemCreateFormInputValues) => TimelineItemCreateFormInputValues;
    onValidate?: TimelineItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function TimelineItemCreateForm(props: TimelineItemCreateFormProps): React.ReactElement;
