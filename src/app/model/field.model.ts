export class Forms {
    id: number;
    formName: string;
    attributes?: Array<Field>;
}

export class Field {
    id?: string;
   name?: string;
   type?: string;
   inputType?: string;
   icon?: string;
   className?: string;
   inputColumn?: string;
   labelColumn?: string;
   layoutCol?: string;
   setting?: Setting;

}

export class Setting {
    _id?: string;
    name?: string;
    labelField?: string;
    placeholder?: string;
    required?: boolean;
    label?: string;
    rows?: string;
    options?: Array<Options>;
    imgSrc?: Array<Image>;
    setBtn?: Array<SetBtn>;

}

export class Options {
    label?: string;
    value?: any;
}

export class SetBtn {
    id?: string;
    name?: string;
    label?: string;
    type?: string;
    className?: string;
}

export class Image {
    src?: string;
}

