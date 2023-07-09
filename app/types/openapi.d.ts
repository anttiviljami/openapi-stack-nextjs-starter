import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
    namespace Schemas {
        export interface Pet {
            id: string;
            type: "cat" | "dog" | "asd";
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
