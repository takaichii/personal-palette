// Personal Palette – Mock entries illuminating early flows.
import { Entry } from '../types';

export const mockEntries: Entry[] = [
  {
    id: 'entry-1',
    title: 'Morning pages with lavender tea',
    type: 'other',
    experiencedAt: '2024-03-01T07:30:00.000Z',
    reflection:
      'A calm morning writing session that set intentions for the day. The steam carried a faint floral note that grounded me.',
    highlight: '"Gentle starts bloom into generous days."',
    impactScore: 4,
    locationText: 'Home studio',
    timeOfDay: 'morning',
    season: 'spring',
    privacy: 'private',
    tags: ['morning', 'ritual', 'writing'],
    emotions: [
      { name: 'serene', intensity: 4 },
      { name: 'grateful', intensity: 3 }
    ],
    creators: [{ name: 'Julia Cameron', role: 'inspiration' }],
    createdAt: '2024-03-01T08:00:00.000Z',
    updatedAt: '2024-03-01T08:00:00.000Z'
  },
  {
    id: 'entry-2',
    title: 'Screening: Whisper of the Forest',
    type: 'movie',
    experiencedAt: '2024-02-18T12:00:00.000Z',
    reflection:
      'Watched with a small circle of friends. The subtle animation strokes encouraged us to notice quieter details in our days.',
    highlight: 'Shared silence can be the loudest conversation.',
    impactScore: 5,
    timeOfDay: 'evening',
    season: 'winter',
    privacy: 'unlisted',
    tags: ['friends', 'visual-art', 'inspiration'],
    emotions: [{ name: 'nostalgic', intensity: 4 }],
    creators: [{ name: 'Aoi Nakamura', role: 'director' }],
    createdAt: '2024-02-18T15:00:00.000Z',
    updatedAt: '2024-02-19T10:00:00.000Z'
  },
  {
    id: 'entry-3',
    title: 'Community watercolor workshop',
    type: 'event',
    experiencedAt: '2024-01-24T03:00:00.000Z',
    reflection:
      'Explored blending techniques with new neighbors. Left with a renewed sense of playfulness and connection.',
    impactScore: 3,
    locationText: 'Local art hub',
    timeOfDay: 'day',
    season: 'winter',
    privacy: 'public',
    tags: ['community', 'art', 'learning'],
    emotions: [{ name: 'curious' }, { name: 'warm' }],
    creators: [{ name: 'Mika Ito', role: 'facilitator' }],
    createdAt: '2024-01-24T06:00:00.000Z',
    updatedAt: '2024-01-24T06:00:00.000Z'
  }
];
