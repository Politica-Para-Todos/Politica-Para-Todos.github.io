import { 
  JsonClassType,
  JsonDeserialize,
  JsonFormat,
  JsonFormatShape,
  JsonIgnoreProperties,
  JsonManagedReference,
  JsonProperty 
} from "jackson-js";
import { buildArray } from "../../utils/parlamento-api";

export class Deslocacao {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_ActividadesComissaoOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [DeslocacaoDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  deslocacaoDetails: DeslocacaoDetails[];

  constructor(deslocacaoDetails: DeslocacaoDetails[]) {
    this.deslocacaoDetails = deslocacaoDetails;
  }
}

@JsonIgnoreProperties({ value: ['legislature'] })
export class DeslocacaoDetails {

  @JsonProperty({ value: 'actId' })
  id: number;

  @JsonProperty({ value: 'actAs' })
  subject: string;

  @JsonProperty({ value: 'actDtdes1' })
  actDtdes1: string;

  @JsonProperty({ value: 'actDtdes2' })
  actDtdes2: string;

  @JsonProperty({ value: 'actLoc' })
  location: string;

  @JsonProperty({ value: 'actTp' })
  typeCode: string;

  @JsonProperty({ value: 'actTpdesc' })
  typeDescription: string;

  @JsonProperty({ value: 'actLg' })
  legislature: string;

  @JsonProperty({ value: 'cmsNo' })
  cmsNo: string;

  @JsonProperty({ value: 'cmsAb' })
  cmsAb: string;

  constructor(
    id: number,
    subject: string,
    actDtdes1: string,
    actDtdes2: string,
    location: string,
    typeCode: string,
    typeDescription: string,
    legislature: string,
    cmsNo: string,
    cmsAb: string,
  ) {
    this.id = id;
    this.subject = subject;
    this.actDtdes1 = actDtdes1;
    this.actDtdes2 = actDtdes2;
    this.location = location;
    this.typeCode = typeCode;
    this.typeDescription = typeDescription;
    this.legislature = legislature;
    this.cmsNo = cmsNo;
    this.cmsAb = cmsAb;
  }
}
