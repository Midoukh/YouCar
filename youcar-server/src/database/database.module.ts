import { Module } from '@nestjs/common';
import { Connection, getConnectionOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
// const manager = getConnectionManager().get('dev');
// const repository = manager.getRepository<AModel>(M)

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(
          await getConnectionOptions(
            process.env.NODE_ENV === 'production' ? 'prod' : 'dev',
          ),
        ),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DataBaseModule {
  constructor(connection: Connection) {
    if (connection.isConnected) {
      console.log('Connected successfully');
    }
  }
}
