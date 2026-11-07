# rizwan09.github.io

Personal academic website of Md Rizwan Parvez. Built with Jekyll and jekyll-scholar; GitHub Actions deploys it on every push to `main`.

Almost everything on the site is plain data. You rarely need to touch HTML.

## Where to edit

| To change | Edit |
| --- | --- |
| Name, title, affiliation, email, photo, links, bio, recruiting note, publication summary (citations, h-index) | `_data/profile.yml` |
| CV | Replace `files/CV_Md_Rizwan_Parvez.pdf` (same file name). If you rename it, update `cv:` in `_data/profile.yml` and the `CV` entry in `_config.yml`. |
| Research statement | Replace `files/Research_Statement_Md_Rizwan_Parvez.pdf` (path set by `statement:` in `_data/profile.yml`) |
| News | `_data/news.yaml` (newest first; one short line each; `when` is `MM.YYYY` or `YYYY`) |
| Recognition cards in the sidebar | `_data/recognition.yml` (`kind`: award, cited, adopted, impact) |
| Research section, diagram, and per-thread pipelines (`stages`) | `_data/research.yml` |
| Experience timeline | `_data/experience.yml` (use `items:` to group entries, as with the internships) |
| Service | `_data/service.yml` (add `url` to make a venue a link) |
| Mentees and alumni | `_data/members.yaml` (`current: true` shows them on the homepage) |
| Talks, honors and awards pages | `_data/talk.yaml`, `_data/award.yaml` |
| Navigation menu | `navbar-links` in `_config.yml` |
| Colors and fonts | top of `css/site.css` |

## Adding a paper

Add an entry to `bibliography/ref.bib`. It appears on the publications page under its `thread` automatically. Thread names and order are in `_data/threads.yml`.

```bibtex
@inproceedings{lastname2027short,
  title = {{Paper Title}},
  author = {First Author and Md Rizwan Parvez},
  booktitle = {ACL 2027},
  year = {2027},
  abbr = {ACL '27},              % short label shown left of the paper
  pub_type = {conference},       % conference | journal | workshop | pre-print
  thread = {code},               % knowledge | code | spatial | chart | web | safety | other
  featured = {code},             % optional: also show on the homepage under this thread
  topic = {agents code},         % optional tags
  paper_url = {https://arxiv.org/abs/xxxx.xxxxx},
  code_url = {https://github.com/...},
  keynote = {Outstanding Paper}  % optional award, shown in red
}
```

When a pre-print is accepted, change `pub_type`, `booktitle`, and `abbr`.

## Local preview

```
bundle install
bundle exec jekyll serve
```
