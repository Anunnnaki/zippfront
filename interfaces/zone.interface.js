export const Zone = {
  nameZone: "",
  addressZone: "",
  // gps: null,
  // tipo: "",
  // dispo: "",
  // valor: null,
};
export const VModelZone = [
  // {
  //   property: "zoneItem",
  //   oneKey: "editedZone",
  //   defaultValue: { ...Zone },
  // },
  {
    property: "zoneItemNameZone",
    oneKey: "editedZone",
    twoKey: "nameZone",
    defaultValue: Zone.nameZone,
  },
  {
    property: "zoneItemAddressZone",
    oneKey: "editedZone",
    twoKey: "addressZone",
    defaultValue: Zone.addressZone,
  },
  {
    property: "zoneItemGps",
    oneKey: "editedZone",
    twoKey: "gps",
    defaultValue: Zone.gps,
  },
  {
    property: "zoneItemTipo",
    oneKey: "editedZone",
    twoKey: "tipo",
    defaultValue: Zone.tipo,
  },
  {
    property: "zoneItemDispo",
    oneKey: "editedZone",
    twoKey: "dispo",
    defaultValue: Zone.dispo,
  },
  {
    property: "zoneItemValor",
    oneKey: "editedZone",
    twoKey: "valor",
    defaultValue: Zone.valor,
  },
];
