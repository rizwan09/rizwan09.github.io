---
title:
layout: page
---

<div class="hero-section">
  <div class="hero-content">
    <div class="profile-container">
      <div class="profile-image">
        <img src="img/myphoto.jpg" alt="Md Rizwan Parvez" class="profile-avatar">
        <div class="status-indicator"></div>
      </div>
      <div class="profile-info">
        <h1 class="name-title">Md Rizwan Parvez</h1>
        <p class="role-subtitle">Scientist @ QCRI</p>
        <div class="research-tags">
          <span class="tag">Natural Language Processing</span>
          <span class="tag">Machine Learning</span>
          <span class="tag">Software Engineering</span>
        </div>
      </div>
    </div>
    
    <div class="contact-grid">
      <a href="mailto:rizwan@ucla.edu" class="contact-item email">
        <i class="fa fa-envelope"></i>
        <span>rizwan@ucla.edu</span>
      </a>
      <a href="https://scholar.google.com/citations?user=KhC8rtcAAAAJ&hl=en" class="contact-item scholar">
        <i class="fa fa-graduation-cap"></i>
        <span>Google Scholar</span>
      </a>
      <a href="https://www.linkedin.com/in/rizwanparvez" class="contact-item linkedin">
        <i class="fa fa-linkedin"></i>
        <span>LinkedIn</span>
      </a>
      <a href="https://drive.google.com/file/d/1bifUIeFKGY4MMkx28jh_egyzGyvZ8x4Q/view?usp=sharing" class="contact-item cv">
        <i class="fa fa-file-text"></i>
        <span>Curriculum Vitae</span>
      </a>
    </div>
  </div>
</div>

<div class="content-wrapper">
  <section class="bio-section">
    <div class="section-header">
      <h2><i class="fa fa-user-circle"></i> About Me</h2>
    </div>
    <div class="bio-content">
      <p>I am a Scientist at Qatar Computing Research Institute. I have completeded my Ph.D. from <a href="http://www.cs.ucla.edu/">CS@UCLA</a>
  and was advised by <a href="http://web.cs.ucla.edu/~kwchang/">Prof. Kai-Wei Chang</a>. My research centers on language and code. The overarching goal is to enable seamless human–machine interaction by dissolving the boundaries between natural language, computational logic, and dynamic environments. I am interested in the following five threads. </p>
      
      <p> <strong> Bridging Natural and Programming Languages: </strong> We have developed pioneering works on code generation and competitive problem solving, such as RedCoder, xCodeEval, MapCoder, and CodeSim. Currently, we are focusing more on code reasoning and software engineering (SWE) tasks. </p>

       <p> <strong> Learning from Open Knowledge and Auxiliary Supervision: </strong> We published several impactful papers on retrieval augmented generation (RAG), including ERA, DelucionQA, Filco, Open-RAG, TechniqueRAG, and Chain-of-Evidences that can adaptively determine when to use external retrieval, how to filter retrieval noises and leverage them. </p>

       <p> <strong> Connecting Language with Visual and Spatial Reasoning: </strong> We built systems that augments language with multi-modal learning signals. For visual reasoning, we co-developed ChartQAPro, ChartInstruct, DataNarrative, DashboardQA, and VideoLights. For geosptial reasoning we developed MapEval, MapAgent, SpatiaLab, and TimeSpot.  </p>

       <p> <strong> Agents for Real-world Environments: </strong> We design AI agents that can operate and reason in real-world environments including Xolver for SWE, WebOperator for Web, MapAgent for tool calling, and other ongoing works. </p>

      <p> <strong> NLP for Social Good: </strong> We are expanding in Science, Healthcare, Security, Quantam, and other socially beneficial AI.  </p>
      
      <div class="callout-box">
        <p><strong>Join us!</strong> We are looking for prospective students, please read <a href="application/">this</a>.</p>
      </div>
    </div>
  </section>

  <section class="research-group-section">
    <div class="section-header">
      <h2><i class="fa fa-users"></i> <a href="members">Our Research Group</a></h2>
      <p class="section-subtitle"><a href="members"> See our amazing team members</a> </p>
    </div>
  </section>


<section class="row">

  <!-- LEFT COLUMN: Selected Achievements -->
  <div class="col-md-6">
    <section class="awards-section">
      <div class="section-header">
        <h2><i class="fa fa-trophy"></i> Selected Achievements</h2>
      </div>

      <div class="awards-list">
        <div class="award-item">
          <span class="award-name">
            <a href="https://icml.cc/virtual/2025/poster/44415">
              ICML Spotlight!! (AC Rate &lt; 2%)
            </a>
          </span>
          <span class="award-year">2025</span>
        </div>

        <div class="award-item">
          <span class="award-name">
            Open-RAG in
            <a href="https://www.marktechpost.com/2024/10/14/open-rag-a-novel-ai-framework-designed-to-enhance-reasoning-capabilities-in-rag-with-open-source-llms/">
              MarkTechPost Coverage!!
            </a>
          </span>
          <span class="award-year">2024</span>
        </div>

        <div class="award-item">
          <span class="award-name">UCLA Graduate Fellowships</span>
          <span class="award-year">2017, 2018</span>
        </div>

        <div class="award-item">
          <span class="award-name">ACL and EMNLP Student Travel Grant</span>
          <span class="award-year">2018, 2021</span>
        </div>

        <div class="award-item">
          <span class="award-name">Best Demo Award: Bangladesh Inter-University System Design and Development </span>
          <span class="award-year">2015</span>
        </div>

        <!--
        <div class="award-item">
          <span class="award-name">Dean’s List Award, BUET</span>
          <span class="award-year">2013-2015</span>
        </div>
        -->
        
        <div class="award-item">
          <span class="award-name">Best Demo Award: Workshop on Mobile Computing and Human Computer Interaction </span>
          <span class="award-year">2014</span>
        </div>


        

        
      </div>

      <div class="section-footer">
        <a href="awards" class="btn btn-outline">Show More Awards</a>
      </div>
    </section>
  </div>

  <!-- RIGHT COLUMN: News + Talks -->
  <div class="col-md-6">

    <!-- News -->
    <section class="news-section">
      <div class="section-header">
        <h2><i class="fa fa-bullhorn"></i> News</h2>
      </div>

      <ul class="posts-list">
        {% assign posts = paginator.posts | default: site.posts %}
        {% for post in posts limit:5 %}
          <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </li>
        {% endfor %}
      </ul>

      <div class="section-footer">
        <a href="news" class="btn btn-outline">All News</a>
      </div>
    </section>

    <!-- Selected Talks -->
    <section class="talks-section mt-4">
      <div class="section-header">
        <h2><i class="fa fa-microphone"></i> Selected Talks</h2>
      </div>

      <div class="talks-list">
        {% for t in site.data.talk[0].talk %}
          {% if t.selected %}
            <div class="talk-item">
              <a href="{{ t.url | relative_url }}">
                Tutorial: {{ t.title }}
              </a>
              <span class="venue"> — {{ t.venue }}</span>
            </div>
          {% endif %}
        {% endfor %}

        {% for t in site.data.talk[1].talk %}
          {% if t.selected %}
            <div class="talk-item">
              <a href="{{ t.url | relative_url }}">
                Talk: {{ t.title }}
              </a>
            </div>
          {% endif %}
        {% endfor %}
      </div>

      <div class="section-footer">
        <a href="talks" class="btn btn-outline">Show More Talks</a>
      </div>
    </section>

  </div>

</section>


 <section class="papers-section">

  <div class="section-header">
    <h2><i class="fa fa-book-open"></i> Selected Recent Papers</h2>
    <div class="header-links">
     <!-- <a href="publications_area/">by topics</a> | -->
      <a href="publications/">   By year</a> |
      <a href="https://scholar.google.com/citations?user=KhC8rtcAAAAJ&hl=en">
        Google Scholar
      </a>
    </div>
  </div>

  <div class="papers-list">
    {% bibliography --file ref -q @*[selected=true]* --sort_by year --order ascending %}
  </div>

  <div class="section-footer">
    <a href="publications" class="btn btn-outline">Show More Papers</a>
  </div>

</section>









  <div class="experience-section">
    <div class="two-column-layout">
      <div class="left-column">
        <section>
          <div class="section-header">
            <h2><i class="fa fa-briefcase"></i> Experience</h2>
            <a href="https://drive.google.com/file/d/1bifUIeFKGY4MMkx28jh_egyzGyvZ8x4Q/view?usp=sharing" class="cv-link">Download CV</a>
          </div>
          <div class="experience-timeline">
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h4>Scientist</h4>
                <p>QCRI</p>
                <span class="timeline-date">2023 - Present</span>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h4>Research Scientist</h4>
                <p>Bosch Research</p>
                <span class="timeline-date">2022 - 2023</span>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h4>PhD Summer Research Internships</h4>
            
                <p><strong>Google Research</strong>, Kirkland, WA
                  <span class="timeline-date">2021</span>
                </p>
            
                <p><strong>Facebook AI Research (FAIR)</strong>, Seattle, WA
                  <span class="timeline-date">2020</span>
                </p>
            
                <p><strong>Salesforce Research</strong>, Palo Alto, CA
                  <span class="timeline-date">2019</span>
                </p>
            
                <p><strong>Microsoft AI & Research</strong>, Redmond, WA
                  <span class="timeline-date">2018</span>
                </p>
            
              </div>
            </div>

          </div>
        </section>
      </div>

      <div class="right-column">
        <section>
          <div class="section-header">
            <h2><i class="fa fa-chalkboard-teacher"></i>Teaching Experience</h2>
          </div>
          <div class="teaching-list">
            <div class="teaching-item">
              <h5>CSM146: Introduction to Machine Learning</h5>
              <h6>UCLA Teaching Fellow (Fall 2020, Winter 2020, Fall 2029, Fall 2018)</h6>
            </div> 
            <div class="teaching-item">
              <h5>CS269: Natural Language Processing</h5>
              <h6>UCLA Teaching Assistant (Fall 2017)</h6>
            </div>
          </div>
        </section>

        <section>
          <div class="section-header">
            <h2><i class="fa fa-hands-helping"></i> Service</h2>
          </div>
          <div class="service-list">
            <div class="service-item">
               <h5>Senior Area Chair</h5>
              <h6>ACL 2026, EACL 2026, EMNLP 2025 </h6> 
            </div>
            <div class="service-item">
              <h5>Area Chair</h5>
              <h6>ACL 2025</h6>
            </div>
          </div>
        </section>
      </div>
    </div>

  </div>
</div>


<style>
/* Modern styling for the Jekyll page */

/* Modern styling for the Jekyll page */

.hero-section {
  background: linear-gradient(
    to right,
    #3d0808 0%,
    #8B0000 50%,
    #3d0808 100%
  );
  color: #ffffff;
  padding: 4rem 0;
  margin: -2rem -15px 3rem -15px;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.profile-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.profile-image {
  position: relative;
  flex-shrink: 0;
}

.profile-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  object-fit: cover;
  transition: transform 0.3s ease;
}

.profile-avatar:hover {
  transform: scale(1.05);
}

.status-indicator {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  background: #4CAF50;
  border-radius: 50%;
  border: 3px solid white;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(76, 175, 80, 0); }
  100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
}

.profile-info {
  flex: 1;
}

.name-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: white !important;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.5px;
}

.role-subtitle {
  font-size: 1.3rem;
  opacity: 0.95;
  margin: 0 0 1rem 0;
  font-weight: 300;
}

.research-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: rgba(255, 255, 255, 0.15);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.22);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  color: white;
  text-decoration: none;
}

.contact-item i {
  font-size: 1.2rem;
  width: 20px;
  text-align: center;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  margin-bottom: 2rem;
  padding-bottom: 0.75rem;
  position: relative;
  border-bottom: 2px solid #ddd;
}

.section-header h2, .section-header h3 {
  color: #2c3e50;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 700;
}

.section-header h2 {
  font-size: 2.2rem;
}

.section-header h3 {
  font-size: 1.6rem;
}

.section-header i {
  color: #8B0000;
}

.section-subtitle {
  color: #666;
  margin: 0.5rem 0 0 0;
  font-style: italic;
}

.header-links {
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

.header-links a {
  color: #8B0000;
  text-decoration: none;
  transition: color 0.3s ease;
}

.header-links a:hover {
  color: #5d0000;
  text-decoration: underline;
}

.bio-section {
  margin-bottom: 3rem;
}

.bio-content {
  background: #f8f9fa;
  padding: 0;
  border-radius: 0;
  border-left: none
  box-shadow: none;
  margin: 0;
}

  

.bio-content p {
  line-height: 1.7;
  margin-bottom: 1.2rem;
  color: #333;
}

.bio-content p:last-child {
  margin-bottom: 0;
}

.callout-box {
  background: linear-gradient(135deg, #f8f9fa 0%, #f0f0f0 100%);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.callout-box p {
  margin: 0;
  color: #555;
  font-size: 1.25rem;
  font-weight: 400;
  font-style: italic;
  line-height: 1.6;
}

.callout-box strong {
  font-size: 1.05em;
  font-weight: 700;
  color: #333;
  font-style: normal;
}

.research-group-section {
  margin-bottom: 3rem;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(45deg, #f5f5f5 0%, #e8e8e8 100%);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
}

.two-column-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

@media (max-width: 768px) {
  .two-column-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .profile-container {
    flex-direction: column;
    text-align: center;
  }
  
  .name-title {
    font-size: 2rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-section {
    padding: 3rem 0;
  }
}

.papers-section, .awards-section, .talks-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  margin-bottom: 2rem;
  transition: box-shadow 0.3s ease;
}

.papers-section:hover, .awards-section:hover, .talks-section:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.awards-list, .talks-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.award-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
}

.award-item:hover {
  background: #fff5f5;
  transform: translateX(4px);
  box-shadow: 0 2px 8px rgba(139, 0, 0, 0.1);
}

.award-name {
  font-weight: 600;
  color: #333;
}

.award-year {
  color: #8B0000;
  font-weight: 500;
  background: #fff5f5;
  padding: 0.2rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
}

.talk-item {
  padding: 1rem;
  border-left: 3px solid #8B0000;
  background: #f8f9fa;
  margin-bottom: 1rem;
  border-radius: 0 8px 8px 0;
  transition: all 0.3s ease;
}

.talk-item:hover {
  background: #fff5f5;
  border-left-width: 5px;
  box-shadow: 0 2px 8px rgba(139, 0, 0, 0.1);
}

.talk-item a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.talk-item a:hover {
  color: #8B0000;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-outline {
  border: 2px solid #8B0000;
  color: #8B0000;
  background: transparent;
}

.btn-outline:hover {
  background: #8B0000;
  color: white;
  text-decoration: none;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 0, 0, 0.3);
}

.section-footer {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.experience-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  margin-bottom: 2rem;
  transition: box-shadow 0.3s ease;
}

.experience-section:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.cv-link {
  font-size: 0.9rem;
  color: #8B0000;
  text-decoration: none;
  margin-left: auto;
  transition: color 0.3s ease;
}

.cv-link:hover {
  color: #5d0000;
  text-decoration: underline;
}

.news-month {
  margin-bottom: 1.5rem;
}

.news-date {
  display: block;
  font-weight: 600;
  font-size: 1rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.news-item {
  margin-left: 1rem;
  line-height: 1.6;
  font-size: 0.95rem;
  color: #333;
  padding-left: 1rem;
  border-left: 2px solid #e0e0e0;
  transition: border-color 0.3s ease;
}

.news-item:hover {
  border-left-color: #8B0000;
}

.experience-timeline {
  position: relative;
  padding-left: 2rem;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 0.5rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #8B0000, rgba(139, 0, 0, 0.3));
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #8B0000;
  border: 3px solid white;
  box-shadow: 0 0 0 3px rgba(139, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-marker {
  transform: scale(1.3);
  box-shadow: 0 0 0 5px rgba(139, 0, 0, 0.2);
}

.timeline-content h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
  font-weight: 600;
  font-size: 1.1rem;
}

.timeline-content p {
  margin: 0 0 0.5rem 0;
  color: #666;
  line-height: 1.6;
}

.timeline-date {
  font-size: 0.9rem;
  color: #8B0000;
  font-weight: 500;
}

.teaching-list, .service-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.teaching-item, .service-item {
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
  border-left: 5px solid #8B0000;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.teaching-item:hover, .service-item:hover {
  background: #efefef;
  border-left-width: 6px;
  box-shadow: 0 2px 8px rgba(139, 0, 0, 0.1);
}

.teaching-item h5, .service-item h5 {
  margin: 0 0 0.8rem 0;
  color: #1a1a1a;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.4;
}

.teaching-item h6, .service-item h6 {
  margin: 0;
  color: #444;
  font-size: 1.15rem;
  font-weight: 400;
  line-height: 1.6;
}
</style>



