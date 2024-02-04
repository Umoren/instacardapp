import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TimelineItem } from "./graphql/types";
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
export declare type TimelineItemUpdateFormInputValues = {
    description?: string;
    postTime?: string;
};
export declare type TimelineItemUpdateFormValidationValues = {
    description?: ValidationFunction<string>;
    postTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TimelineItemUpdateFormOverridesProps = {
    TimelineItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    postTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TimelineItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: TimelineItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    timelineItem?: TimelineItem;
    onSubmit?: (fields: TimelineItemUpdateFormInputValues) => TimelineItemUpdateFormInputValues;
    onSuccess?: (fields: TimelineItemUpdateFormInputValues) => void;
    onError?: (fields: TimelineItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TimelineItemUpdateFormInputValues) => TimelineItemUpdateFormInputValues;
    onValidate?: TimelineItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TimelineItemUpdateForm(props: TimelineItemUpdateFormProps): React.ReactElement;
