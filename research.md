---
layout: page
title: "Research"
subtitle: "Auditable agentic AI: attributed, verifiable, and grounded."
permalink: /research/
meta-description: "Research of Md Rizwan Parvez: auditable agentic AI across three interfaces: language–knowledge (attributed RAG), language–code (verifiable code and SE agents), and language–action (grounded agents)."
---

<p class="small">The full version is in my <a href="{{ site.data.profile.statement | relative_url }}">research statement</a> (PDF).</p>


Large language models (LLMs) have made natural language a powerful interface to computation: non-experts seek answers through chat, developers describe software in English, and agents use tools on our behalf. Yet these systems fail in ways that are difficult for users to detect. Answers cite nonexistent or unsupported sources. Generated code runs but silently returns incorrect results. Agents act confidently on outdated or incomplete views of their environments. These failures are especially consequential in software, medicine, law, and finance.

<blockquote>Never let the model be its own only witness. An answer should be checked against its cited passages, a program against specifications and execution, and an action against observations of the environment it will change.</blockquote>

My research develops these checks throughout an agent's workflow rather than only at the end. The resulting toolkit combines provenance-aware retrieval, execution-driven automation that reconciles parallel hypotheses, simulation-guided planning, and diagnostic evaluation that isolates failures.

{% include research-map.html %}

<h2 id="knowledge">Language–Knowledge: Retrieval, attribution, and evolving memory</h2>

Before an agent can be trusted to act, it must be trusted to know. Retrieval-augmented generation (RAG) grounds output in external text, but production RAG still retrieves misleading passages, cannot say which source supports which claim, and treats outdated content as current. My organizing claim is that **attribution is a pipeline property, not a post-hoc citation**: provenance survives to the output only if valuation, retrieval, filtering, and generation each expose an auditable, overridable decision.

- **Valuing and filtering evidence.** Shapley-style source valuation at the corpus level (NAACL 2021) and budgeted sentence/phrase selection (EMNLP 2019); **[FiLCo](https://arxiv.org/abs/2311.08377)** learns which retrieved context is worth passing to the generator; **[ERA](https://aclanthology.org/2023.eacl-main.16/)** ensembles retrievers and filters for privacy-policy QA (+10% F1, EACL 2023).
- **Retrieval-augmented reasoning.** **[Open-RAG](https://arxiv.org/abs/2410.01782)** (EMNLP 2024 Findings) turns a dense open-source LLM into a parameter-efficient sparse mixture-of-experts that navigates distractors and decides when to retrieve; its Llama2-7B instantiation outperforms ChatGPT-RAG, Self-RAG, RAG 2.0, and the 104B Command R+ on knowledge-intensive tasks.
- **Knowing what the model does not know.** **[DelucionQA](https://arxiv.org/abs/2312.05200)** detects hallucination in domain-specific QA; **[CoT–PoT](https://arxiv.org/abs/2604.17433)** (ACL 2026 Findings) reaches self-consistency from only two samples (9.3× fewer) by ensembling a reasoning chain with a program-of-thought; a conformal benchmark measures calibrated abstention across 18 VLMs.
- **Where evidence has consequences.** **[TechniqueRAG](https://arxiv.org/abs/2505.11988)** for cyber-threat intelligence; **[Mina](https://aclanthology.org/2026.findings-acl.1295/)**, a multilingual legal-aid agent reaching 75–80% on Bangladesh Bar Council exams at under 1% of typical consultation cost; **DR-VQA** for diabetic-retinopathy screening.

<h2 id="code">Language–Code: Code generation and software engineering agents</h2>

Code is the scalable lever for natural-language automation, and because code can be executed, tested, and analyzed, the property that gives it power also lets us verify it. Today's systems still produce code that runs but returns wrong results: **the bottleneck is correctness, not fluency**. This is my flagship line.

<figure>
  <img src="{{ '/img/research/code-pipeline.png' | relative_url }}" alt="End-to-end language–code pipeline: federated coding agents retrieve, plan, simulate and verify, and execute and debug; a judge agent reconciles feedback into evolving memory; discussion and reviewer agents resolve issues behind safety guardrails." loading="lazy">
  <figcaption>End-to-end language–code pipeline: federated coding agents propose; a Xolver judge reconciles into evolving memory; SWE-Discussion and Agent-as-a-Reviewer resolve and review; safety guardrails gate the loop.</figcaption>
</figure>

- **From retrieval to verified synthesis.** **[RedCoder](https://arxiv.org/abs/2108.11601)** (EMNLP 2021 Findings) was among the first retrieval-augmented frameworks for code; **[MapCoder](https://arxiv.org/abs/2405.11403)** (ACL 2024) extended it to a four-agent recall–plan–code–debug pipeline (93.9% pass@1 on HumanEval); **[CodeSim](https://arxiv.org/abs/2502.05664)** (NAACL 2025 Findings) added simulation-driven plan verification (95.1% HumanEval, 90.7% MBPP). The lesson: verify the plan before the program exists, while an error still costs one prompt.
- **Generalist problem solving.** **[Xolver](https://arxiv.org/abs/2506.14234)** maps human experience (mentorship, prior self, tools, peers) onto retrieval, self-retrieval, tool use, and multi-agent collaboration with shared, evolving memory, all without training.
- **Benchmarks.** **[xCodeEval](https://arxiv.org/abs/2303.03004)** (ACL 2024): 25M execution-judged examples, 11 languages, 7 tasks, 6.2M+ Hugging Face downloads. **VibeSweBench** shows the strongest frontier configuration reaching only 20.9% on realistic "vibe coding" workflows.
- **Repository-scale software engineering.** **SWE-Xplorer** reframes issue resolution as best-first tree search with cross-path reconciliation (53.2% → 60.8% on SWE-Bench Verified under matched budgets); **SWE-Discussion** fuses partial localization evidence through role-played discussion; **Agent-as-a-Reviewer** issues auditable merge-or-reject decisions on real pull requests.
- **Securing the code supply chain.** **[Poison with Style](https://arxiv.org/abs/2605.27631)** (ICML 2026) induces insecure code in up to 95% of cases with under 6% utility drop.

<h2 id="action">Language–Action: Grounded agents</h2>

An agent that knows and makes must finally act: navigate maps, fill forms, and compose workflows across tools. Across physical space, organizational data, and software screens, the failure is the same (models recite state they cannot operate on) and so is the method: **instrument first, then build the agent**.

- **Spatially grounded.** **[MapEval](https://arxiv.org/abs/2501.00316)** (ICML 2025 Spotlight, top 2%) exposed a >20-point human gap across 180 cities and 54 countries; from it grew **[MapAgent](https://arxiv.org/abs/2509.05933)** (EACL 2026 Findings), **[MapQaTor](https://aclanthology.org/2025.acl-demo.1/)** (ACL 2025 Demo), **[SpatiaLab](https://arxiv.org/abs/2602.03916)** (ICLR 2026), **[TimeSpot](https://arxiv.org/abs/2603.06687)** (ICML 2026), [CompassLLM](https://aclanthology.org/2026.findings-acl.1599/), and UrbanAgentBench.
- **Web and GUI agents.** **[WebOperator](https://arxiv.org/abs/2512.12692)** brings tree search to partially observable web environments, ranking actions by reward and reversibility, and is among the top-scoring open-source agents on WebArena. **[GUI-Primitives](https://arxiv.org/abs/2608.21832)** (EMNLP 2026) isolates grounding as the bottleneck for computer-use agents: the best of 19 models reaches 31% vs. 96.9% for humans.
- **Grounded in visual data.** [ChartInstruct](https://aclanthology.org/2024.findings-acl.619/), **[ChartQAPro](https://arxiv.org/abs/2504.05506)** (adopted in the evaluation suites of Claude Mythos/Fable 5, ByteDance Seed 2.0, and Alibaba Ovis 2.5), [DataNarrative](https://aclanthology.org/2024.emnlp-main.1073/), **[DashboardQA](https://arxiv.org/abs/2508.17398)**, and ChartQA-Video.

<h2 id="safety">Trustworthy agents</h2>

Trustworthiness has to be built in and then audited. Our [critical review of LLM evaluation](https://aclanthology.org/2024.emnlp-main.764/) (top-29 most-cited at EMNLP 2024) diagnoses why model comparisons mislead; our **[agentic security](https://arxiv.org/abs/2510.06445)** survey (TMLR 2026) offers a three-pillar taxonomy across 274 papers; **[AgentTell](https://arxiv.org/abs/2609.32915)** studies behavioural side-channel leakage in browser-use agents; **[X-Teaming](https://arxiv.org/abs/2504.13203)** (COLM 2025) reaches 98.1% multi-turn attack success with collaborative planner–attacker–verifier agents; **[AI Debate](https://arxiv.org/abs/2506.02175)** (NeurIPS 2025) helps human judges beat single-advisor consultancy by 4–10 points; and CTF failure attribution shows security-agent failures are dominated by a reasoning ceiling rather than tooling.

<h2 id="future">Future directions</h2>

<h3>A unified, attributed, and safe knowledge substrate</h3>
<p>Treat every form of knowledge an agent consumes (documents, memories, skills, and tools, in any modality) as one class of attributable object, with a cross-modal provenance graph, a continually red-teamed certification layer for the knowledge supply chain, and compounding memory whose provenance and safety certificates travel with it.</p>

<h3>Trustworthy human–AI software engineering</h3>
<p>A research platform that instruments the full development lifecycle across interactive, hybrid, and autonomous loops, gating review, repair, and vulnerability remediation behind formal verifiers and calibrated abstention, with SWE-Bench-style evaluation that scores a wrong fix against a safe abstention.</p>

<h3>Grounding agents in a changing world</h3>
<p>Agents are built and tested against static snapshots, so their grounding decays the moment the world moves. I aim to build agents that discover and compose unseen tools from documentation alone, long-horizon agents that solve memory-conditioned credit assignment over days to weeks, and a living evaluation infrastructure regenerated from live maps, feeds, repositories, and interfaces faster than it can leak into training data.</p>
