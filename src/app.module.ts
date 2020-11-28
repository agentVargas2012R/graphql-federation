import { Module } from '@nestjs/common';
import { GATEWAY_BUILD_SERVICE, GraphQLGatewayModule } from '@nestjs/graphql';
import { BuildModule } from './build/build.module';

@Module({
  imports: [
    GraphQLGatewayModule.forRootAsync({
      useFactory: async () => ({
        gateway: {
          serviceList: [
            { name: 'Auth', url: 'http://localhost:3002/graphql' },
            { name: 'Student', url: 'http://localhost:3000/graphql' },
          ],
        },
        server: {
          context: ({ req }) => ({ authorization: req.headers.authorization }),
        },
      }),
      imports: [BuildModule],
      inject: [GATEWAY_BUILD_SERVICE],
    }),
  ],
  providers: [],
})
export class AppModule {}
