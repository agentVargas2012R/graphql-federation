/* eslint-disable @typescript-eslint/no-unused-vars */
import { RemoteGraphQLDataSource } from '@apollo/gateway';

export class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  async willSendRequest({ request, context }) {
    request.http.headers.set('token', context.authorization);
  }
}
