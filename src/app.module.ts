import {Module} from '@nestjs/common';
import { MovieModule } from './movies/movies.module';
import { AppController } from './app/app.controller';


@Module({
  imports: [MovieModule],
  controllers: [],
  providers: []
})
export class AppModule {}