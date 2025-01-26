export type TriggerType = 
  | 'stress-relief'
  | 'self-medication'
  | 'boredom'
  | 'peer-pressure'
  | 'decompression'
  | 'celebration'
  | 'availability'
  | 'environmental';

export interface TriggerOption {
  id: TriggerType;
  label: string;
  description: string;
  suggestions?: string[];
}

export const triggerOptions: TriggerOption[] = [
  {
    id: 'stress-relief',
    label: 'Stress Relief',
    description: 'Using as a way to cope with stress or anxiety',
    suggestions: [
      'Healthy Relaxation Techniques: Encourage activities like meditation, yoga, or deep-breathing exercises to reduce stress naturally.',
      'Physical Activity: Exercise like running, swimming, or cycling can release endorphins and relieve tension.',
      'Creative Outlets: Painting, journaling, or playing a musical instrument can be calming and therapeutic.',
      'Therapy or Counseling: Professional support can provide tools to manage stress in healthier ways.'
    ]
  },
  {
    id: 'self-medication',
    label: 'Self-Medication',
    description: 'Attempting to manage physical or emotional pain'
  },
  {
    id: 'boredom',
    label: 'Boredom',
    description: 'Using due to lack of activities or stimulation'
  },
  {
    id: 'peer-pressure',
    label: 'Peer Pressure',
    description: 'Influence from social situations or friends'
  },
  {
    id: 'decompression',
    label: 'Decompression',
    description: 'Unwinding after a long day or stressful event'
  },
  {
    id: 'celebration',
    label: 'Celebration',
    description: 'Using during special occasions or achievements'
  },
  {
    id: 'availability',
    label: 'Availability',
    description: 'Easy access or opportunity to use'
  },
  {
    id: 'environmental',
    label: 'Environmental Stressors',
    description: 'External factors like location or situations'
  }
];
