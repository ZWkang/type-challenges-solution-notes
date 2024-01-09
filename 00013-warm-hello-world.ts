
export type Expect<T extends true> = T
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false

export const localeFileType = {
  xlsx: 6,
  js: 7,
  ts: 8,
  json: 9,
  strings: 1, //mac | ios
  androidXml: 3, //android
  ini: 2, //window
  winXml: 5, //window
  arb: 4, //flutter
} as const;

type ValueOf<T> = T[keyof T];

export type localeFileType = ValueOf<typeof localeFileType>;

type True = true;
type False = false;

interface FileOption {
  showName: string;
  extension: string;
  single: True | False;
  fileName: string;
  type: localeFileType;
}
type FileOptionsMap = {
  [K in localeFileType]: FileOption;
};

export const FileOptionsList = [
  {
    showName: 'JavaScript js',
    extension: '.js',
    single: true as True,
    fileName: 'intl.js',
    type: localeFileType.js,
  },
  {
    showName: 'TypeScript ts',
    extension: '.js',
    single: true as True,
    fileName: 'intl.ts',
    type: localeFileType.ts,
  },
  {
    showName: 'IOS strings',
    extension: '.strings',
    single: true as True,
    fileName: 'Localizable.strings',
    type: localeFileType.strings,
  },
  {
    showName: 'Android xml',
    extension: '.xml',
    single: true as True,
    fileName: 'strings.xml',
    type: localeFileType.androidXml,
  },
  {
    showName: 'Flutter arb',
    extension: '.arb',
    single: true as True,
    fileName: 'intl.arb',
    type: localeFileType.arb,
  },
  {
    showName: 'Json',
    extension: '.json',
    single: true as True,
    fileName: 'intl.json',
    type: localeFileType.json,
  },
  {
    showName: 'Window ini',
    extension: '.ini',
    single: true as True,
    fileName: 'gdstrings.ini',
    type: localeFileType.ini,
  },
  {
    showName: 'Window xml',
    extension: '.xml',
    single: false as False,
    fileName: '',
    type: localeFileType.winXml,
  },
  {
    showName: 'xlsx',
    extension: '.xlsx',
    single: false as False,
    fileName: '',
    type: localeFileType.xlsx,
  },
] as const;


type tupleToRecord<T, Result extends any = any> = T extends readonly [infer R, ...infer Rest]
  ? R extends { type: infer Z }
  // ? tupleToRecord<Rest, Rest & { [`${Z}`]: R }>
  ? Z extends localeFileType
  ? tupleToRecord<Rest, Result & { [key in Z]: R }>
  : never
  : never
  : Result;
type TransformType = tupleToRecord<typeof FileOptionsList, {}>

type mergeTypes<O> = {
  [key in keyof O]: O[key]
}

type OptionsType = mergeTypes<TransformType>

type WantToBeTrue = OptionsType[3]['single'];
type WantToBeFalse = OptionsType[6]['single'];


type case1 = [
  Expect<Equal<WantToBeFalse, false>>,
  Expect<Equal<WantToBeTrue, true>>,
]