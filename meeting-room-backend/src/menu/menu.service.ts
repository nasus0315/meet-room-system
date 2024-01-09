import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
  @InjectRepository(Menu)
  private menuRepository: Repository<Menu>;

  async getMenu(): Promise<Menu[]> {
    return await this.menuRepository.find();
  }
}
