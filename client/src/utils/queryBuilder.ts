export interface Params {
   [key: string]: string | number;
}

export class QueryBuilder {
   public encode(params: Params) {
      return Object.keys(params).map((key) => (
         `${key}=${encodeURIComponent(params[key])}`
      )).join('&');
   }

   public decode(params: Params) {

   }

}

