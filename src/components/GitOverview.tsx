import React from 'react';

const GitOverview: React.FC = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="bg-funkyGray mb-8 rounded-lg p-6 max-w-screen-lg mt-5 mx-auto text-left">
        <h1 className="text-4xl font-bold text-funkyYellow mb-3">Git Overview</h1>
        <p className="text-lg text-funkyYellow mb-8">
          Git is a version control system that helps teams manage and track changes in their codebase. It is essential for collaborative development and ensures your code history is preserved.
        </p>

        {/* Why Learn Git */}
        <h2 className="text-2xl font-bold text-funkyYellow mb-2 mt-5">Why Learn Git?</h2>
        <p className="text-lg text-funkyYellow mb-8">
          Learning Git is critical for working on FRC projects as it allows team members to collaborate efficiently. You can track changes, work on multiple features simultaneously, and resolve issues with confidence.
        </p>

        {/* Key Concepts */}
        <h2 className="text-2xl font-bold text-funkyYellow mt-5">Key Concepts:</h2>
        <ul className="list-disc list-inside text-funkyYellow text-left mx-auto mt-3 mb-5">
          <li>Repositories</li>
          <li>Commits</li>
          <li>Branches</li>
          <li>Merging and Conflicts</li>
          <li>Remote Repositories (e.g., GitHub)</li>
        </ul>

        {/* Example Git Commands */}
        <h2 className="text-2xl font-bold text-funkyYellow mb-2 mt-5">Common Git Commands:</h2>
        <div className="bg-black text-white rounded-lg p-4 text-left font-mono text-sm overflow-x-auto mb-5">
          <code>
            <div># Clone a repository</div>
            <div>git clone https://github.com/your-team/project.git</div>
            <br />
            <div># Check the status of your repository</div>
            <div>git status</div>
            <br />
            <div># Add changes to staging</div>
            <div>git add .</div>
            <br />
            <div># Commit changes</div>
            <div>git commit -m "Describe your changes"</div>
            <br />
            <div># Push changes to the remote repository</div>
            <div>git push origin main</div>
          </code>
        </div>

        {/* Tips for FRC Teams */}
        <h2 className="text-2xl font-bold text-funkyYellow mt-5">Tips for FRC Teams:</h2>
        <ul className="list-disc list-inside text-funkyYellow text-left mx-auto mt-3 mb-5">
          <li>Create a clear branching strategy (e.g., main for stable code, feature branches for new work).</li>
          <li>Commit often with descriptive messages to keep track of your progress.</li>
          <li>Always pull the latest changes before starting work to avoid merge conflicts.</li>
          <li>Use tools like GitHub Issues and Pull Requests for better collaboration.</li>
        </ul>

        {/* Resources */}
        <h2 className="text-2xl font-bold text-funkyYellow mt-5">Resources:</h2>
        <ul className="list-disc list-inside text-funkyYellow text-left mx-auto mt-3">
          <li>
            <a
              href="https://git-scm.com/doc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-funkyGold hover:underline"
            >
              Official Git Documentation
            </a>
          </li>
          <li>
            <a
              href="https://www.atlassian.com/git/tutorials"
              target="_blank"
              rel="noopener noreferrer"
              className="text-funkyGold hover:underline"
            >
              Atlassian Git Tutorials
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-funkyGold hover:underline"
            >
              GitHub: Remote Repository Hosting
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GitOverview;
