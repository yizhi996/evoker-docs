export interface DataItem {
  name: string
  desc: string
}

export interface PropsDataItem extends DataItem {
  default: string
  required: boolean
  version: string
  values?: DataItemValue[]
}

export interface EventsDataItem extends DataItem {
  event: string
  version: string
}

export interface ResultsDataItem extends DataItem {
  type: string
  version: string
  values?: DataItemValue[]
}

export interface DataItemValue {
  value: string
  desc: string
}
