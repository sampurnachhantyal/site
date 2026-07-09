---
title: "Job Vacancy: AI QA Engineer — Agentic Test Automation (Mid-level)"
pubDate: 2026-07-09
tags: ['qa', 'ai', 'playwright', 'llm', 'automation']
slug: ai-qa-engineer-agentic-test-automation
---

# AI QA Engineer — Agentic Test Automation (Mid-level)

**Threadcode Technologies** · threadcodetech.com  
**Location:** Kathmandu, Nepal (hybrid) · **Type:** Full-time · **Openings:** 1 · **Reports into:** QA / Engineering Enablement

## About Threadcode & the role

Threadcode is a Nepal-based software engineering firm serving international clients. Our primary product, **Event Logic**, is a Swedish SaaS platform for corporate event management — white-labeled, multi-tenant, running across the Nordics and Europe in six languages.

We don't just use AI to write code — we use it to **test** code. Our QA pipeline is agentic end-to-end: AI agents explore the application, draft Gherkin scenarios, implement Playwright step definitions, heal failing tests, and verify suspected regressions — while a human QA engineer designs the test strategy, approves what the agents produce, and attests to what a machine cannot judge. Every push is gated by an executed test playbook with recorded video evidence; every bug fix ships with a paired red→green proof that the defect existed and is gone.

This role is that human. You will not spend your days hand-writing test cases one at a time. You will **orchestrate, review, and harden an AI-driven QA system** — and be accountable for what it lets through.

If our QA Engineer posting is "prove it works," this one is "**run the system that proves it works.**"

## What you'll actually do

- **Operate the agentic test cycle.** Drive our LLM-agent pipeline (built on Claude Code) through its full loop: exploration → scenario drafting → step implementation → test run → heal → AI verify → green run. You are the approval gate at every stage — agents propose, you decide.
- **Shape test strategy, not just test scripts.** Help author the QA playbooks (trigger surfaces, acceptance criteria, replication recipes) that agents and developers execute. You test the *plan* the AI didn't think of.
- **Review AI-authored Gherkin and Playwright code** against our conventions: declarative scenarios, no magic numbers, strict selector priorities (`data-testid` registries, i18n-safe role selectors, no fallback chains). Reject what doesn't meet the bar — the agents learn from your corrections.
- **Run and improve the self-healing loop.** Diagnose failing scenarios (selector drift vs. timing vs. real regression vs. app bug), supervise agent heal attempts, and enforce the discipline that distinguishes a flaky test from a shipped defect — including our "one heal at a time" rule that catches a single root cause masquerading as twelve failures.
- **Verify with evidence, not vibes.** Execute pre-push validation gates: per-row pass/fail on every test recipe with video recordings, attached to Azure DevOps work items as reviewable testing evidence. Provide human attestation on the rows a machine can't judge (visual quality, email content, business sense).
- **Regression-first bug handling.** Every bug you file carries a deterministic replication recipe; every fix is proven by re-running the *same* recipe red→green. You'll enforce fails-first regression tests so no bug silently returns.
- **Feed the learnings loop.** When a test fails for a new reason, when an agent makes the same mistake twice, when a selector convention gap bites — you capture it as a structured learning and turn it into a durable rule, hook, or lint so the system never needs the same correction twice.
- **Test the hard stuff.** Multi-tenant isolation, white-label theming across six client brands, a client × language i18n matrix, QAT/UAT dual environments, and AI product features themselves (LLM-powered agents inside Event Logic that need their own evaluation and guardrail testing).

## Must-haves

- **2–4 years of QA experience** on web products, with real hands-on automation work (writing and maintaining tests, not just executing suites someone else built).
- **Genuine hands-on experience using LLM tools in your daily work** — Claude Code, Cursor, Copilot, ChatGPT, or equivalent — beyond autocomplete: you've prompted a model to generate tests, reviewed its output critically, and can articulate where it fails.
- **Solid Playwright + TypeScript/JavaScript.** You can read, correct, and extend page-object models and step definitions — you'll be reviewing AI-written test code daily.
- **BDD/Gherkin fluency** and an opinion on what makes a scenario good (declarative over imperative, behavior over choreography).
- **Test-design depth:** pre-conditions, observable assertions, boundary analysis, and the judgment to know which requirement maps to a unit test, an integration test, or an E2E flow.
- **Professional skepticism toward AI output.** The core skill of this role is *not trusting green*: knowing when a passing suite proves nothing and when an agent's confident answer is wrong.
- **API testing** (REST, auth headers, status-code discipline) and comfort reading network traces, console logs, and application logs to root-cause a failure yourself.
- **Structured written English** — your bug reports, playbooks, and learnings are read by developers, agents, and stakeholders across three time zones.

## You'll stand out with

- Experience with **playwright-bdd** or Cucumber-family toolchains.
- Prompt engineering for test generation, LLM-as-judge / AI-verifier patterns, or evaluation of LLM-powered product features (guardrails, hallucination checks, tool-call correctness).
- Exposure to **agent frameworks or MCP** (Model Context Protocol), CI/CD test gates, or self-healing test tooling.
- Multi-tenant SaaS, localization/white-label testing, Azure DevOps test management.
- Contributions to test infrastructure: selector registries, flake-mode catalogs, custom reporters, evidence tooling.
- ISTQB is welcome but optional — a portfolio of automation you've built and AI workflows you've tamed counts for more.

## What we offer

- **A QA role that doesn't exist in most companies yet.** You'll work at the frontier of AI-augmented quality engineering, on a system already running in production — not a slideware initiative.
- Real authority: you are the approval gate. Nothing ships past QA without your sign-off, human or machine.
- Mature European product, modern infrastructure, and a team that treats QA as an engineering discipline, not a checklist.
- Competitive Nepal-market salary, hybrid work, and afternoon Europe-timezone overlap leaving mornings for deep work.
- Direct mentorship in agentic engineering practices you won't find in a course — you'll grow into this discipline on the job.

## How to apply

Email your CV to **info@threadcodetech.com** with the subject line **"AI QA Engineer"**, and include at least one of:

- An automation suite or test framework you built (repo link preferred);
- A written example of an AI-assisted testing workflow you've used — what you prompted, what the model got wrong, and how you caught it;
- Your best bug report — one with a reproducible recipe and evidence.

Applications are reviewed on a rolling basis.
