import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['tops-redfish-7989-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dG9wcy1yZWRmaXNoLTc5ODkk8VYv3IMV4abVAVnqp8g4cphJuAL_ez3sY46ZhHQ',
          password:
            '9UMucsbFP1cnGssNN7-9UMucsbFP1cnGssNN7-SxYUGmythFM2NN_fxKinGuOCJzmKu7uVTcxWX8vVC2IqSrakvng====',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
