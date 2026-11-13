import { describe, expect, it } from 'vitest'
import { caseStudies, profile, projects, skills } from './portfolio'

describe('portfolio content', () => {
  it('has four featured projects with unique slugs', () => {
    expect(projects).toHaveLength(4)
    expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length)
  })
  it('has unique case study slugs', () => {
    expect(new Set(caseStudies.map((c) => c.slug)).size).toBe(caseStudies.length)
  })
  it('uses root-relative public paths for images', () => {
    const paths = [
      ...projects.map((p) => p.cover),
      ...projects.flatMap((p) => p.gallery.flatMap((g) => g.samples.map((s) => s.src))),
      profile.portrait,
    ].filter(Boolean) as string[]
    for (const path of paths) expect(path.startsWith('/')).toBe(true)
  })
  it('lists the four skill categories', () => {
    expect(skills.map((s) => s.category)).toEqual([
      'Strategy & Research',
      'Creative & Digital',
      'Tools',
      'Certifications',
    ])
  })
})
