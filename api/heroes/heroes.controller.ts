import { Controller, Get, PathParams } from '@tsed/common';
import { Heroe } from './heroes.model';

@Controller('/heroes')
export class HeroesController {
  @Get('/')
  async getHeroes(): Promise<Heroe[]> {
    return [{ id: '1', name: 'deadpool' }];
  }

  @Get('/:id')
  async getHeroe(@PathParams('id') id: number): Promise<Heroe> {
    return { id: '1', name: 'deadpool' };
  }
}
