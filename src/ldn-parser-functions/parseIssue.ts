// @ts-nocheck
/* eslint-disable */
import { parseNewLdn } from './parseNewLdn'
import { parseOldLDN } from './parseOldLDN'
import { parseAllocatorIssue } from './parseAllocator'


// ldn template parser
export function parseIssue (issueContent: string) {
  const trimmed = issueContent.replace(/(\n)|(\r)/gm, '')

  if (trimmed.startsWith('### Version')) { return parseAllocatorIssue(trimmed) }
  if (trimmed.startsWith('### Data Owner Name')) { return parseNewLdn(trimmed) }


  return parseOldLDN(issueContent)
}
