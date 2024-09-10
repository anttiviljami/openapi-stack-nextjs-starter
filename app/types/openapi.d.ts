import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';
import type {
  Context,
  UnknownParams,
} from 'openapi-backend';

declare namespace Components {
    namespace Schemas {
        export interface Pet {
            id: string;
            type: "cat" | "dog";
            name?: string;
        }
    }
}
declare namespace Paths {
    namespace GetPets {
        namespace Responses {
            export type $200 = Components.Schemas.Pet[];
        }
    }
}

export interface OperationMethods {
  /**
   * getPets
   */
  'getPets'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPets.Responses.$200>
}

export interface PathsDictionary {
  ['/api/pets']: {
    /**
     * getPets
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPets.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
export interface Operations {
  /**
   * GET /api/pets
   */
  ['getPets']: {
    requestBody: any;
    params: UnknownParams;
    query: UnknownParams;
    headers: UnknownParams;
    cookies: UnknownParams;
    context: Context<any, UnknownParams, UnknownParams, UnknownParams, UnknownParams>;
    response: Paths.GetPets.Responses.$200;
  }
}

export type OperationContext<operationId extends keyof Operations> = Operations[operationId]["context"];
export type OperationResponse<operationId extends keyof Operations> = Operations[operationId]["response"];
export type HandlerResponse<ResponseBody, ResponseModel = Record<string, any>> = ResponseModel & { _t?: ResponseBody };
export type OperationHandlerResponse<operationId extends keyof Operations> = HandlerResponse<OperationResponse<operationId>>;
export type OperationHandler<operationId extends keyof Operations, HandlerArgs extends unknown[] = unknown[]> = (...params: [OperationContext<operationId>, ...HandlerArgs]) => Promise<OperationHandlerResponse<operationId>>;

export type Pet = Components.Schemas.Pet;
