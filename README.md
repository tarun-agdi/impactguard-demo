# GitHub Issue Impact Analyzer

An AI agent built with TrueForge that investigates GitHub issues, inspects relevant repository files, analyzes their impact, proposes a practical fix, and posts the analysis to GitHub after human approval.

## Workflow

GitHub Issue
→ Issue Investigation
→ Repository Inspection
→ Root Cause Analysis
→ Impact Analysis
→ Proposed Fix
→ Human Approval
→ GitHub Comment

## Built With

- TrueForge
- OpenAI
- GitHub MCP
- GitHub

## Agent Capabilities

- Reads GitHub issues
- Inspects relevant repository files
- Identifies likely root causes
- Identifies affected files and components
- Analyzes severity and user impact
- Proposes a practical fix
- Posts the analysis to the GitHub issue

## Human-in-the-Loop

The agent does not immediately perform the GitHub write action.

Before posting its analysis as a comment, it pauses and asks the human for approval.

This prevents the agent from taking the GitHub action without human confirmation.

## Safety

- Does not modify repository source code
- Does not create branches
- Does not create pull requests
- GitHub comment action requires human approval

## Demo

The agent was tested on Issue #1 of this repository.

It successfully:

1. Read the GitHub issue
2. Inspected the relevant repository files
3. Identified the likely root cause
4. Analyzed the impact
5. Proposed a fix
6. Asked for human approval
7. Posted the analysis as a GitHub comment after approval

## AI Assistance

AI assistants were used during development and agent configuration.

The final agent workflow was tested by the project author using TrueForge and GitHub.
