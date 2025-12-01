import type { Payload } from 'payload'

export const seedTeamMembers = async (payload: Payload): Promise<void> => {
  await payload.create({
    collection: 'team-members',
    data: {
      name: 'Adebayo Kobam',
      role: 'CEO & Founder',
      description: 'Leading the company with 15+ years of experience in agro-export.',
      order: 1,
      status: 'active',
    },
  })

  await payload.create({
    collection: 'team-members',
    data: {
      name: 'Dr. Funmi Adebayo',
      role: 'Chief Operations Officer',
      description: 'Ensuring seamless operations and quality control across all processes.',
      order: 2,
      status: 'active',
    },
  })

  await payload.create({
    collection: 'team-members',
    data: {
      name: 'Ibrahim Hassan',
      role: 'Export Director',
      description: 'Managing international logistics and client relationships.',
      order: 3,
      status: 'active',
    },
  })

  await payload.create({
    collection: 'team-members',
    data: {
      name: 'Dr. Kemi Ogundinmu',
      role: 'Research & Technology Lead',
      description: 'Maintaining the highest standards in product quality and safety.',
      order: 4,
      status: 'active',
    },
  })
}
