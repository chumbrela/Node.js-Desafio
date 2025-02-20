import { Test, TestingModule } from '@nestjs/testing';
import { MovieNotesService } from './movie-notes.service';

describe('MovieNotesService', () => {
  let service: MovieNotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieNotesService],
    }).compile();

    service = module.get<MovieNotesService>(MovieNotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
