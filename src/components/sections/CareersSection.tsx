import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { ShieldCheckIcon, BriefcaseIcon, SparklesIcon } from 'lucide-react';

export const CareersSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentRole: '',
    linkedin: '',
    teams: [] as string[],
    whyJoin: '',
    experience: '',
    contribution: '',
    hoursPerWeek: '',
    questions: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
    setSubmitted(true);
  };

  const handleTeamChange = (team: string) => {
    setFormData(prev => ({
      ...prev,
      teams: prev.teams.includes(team)
        ? prev.teams.filter(t => t !== team)
        : [...prev.teams, team]
    }));
  };

  const teams = [
    'Creative Design',
    'Social Media Strategy',
    'Branding & Identity',
    'Community Management',
    'Content Writing',
    'Partnership & PR Outreach',
    'Event Coordination',
    'Tech & Automation',
    'Feedback & Analytics',
    'Legal & Communication',
    'Operations & Scheduling',
    'Documentation & Reporting'
  ];

  return (
    <section id="careers" className="py-16 md:py-24 px-4 relative bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-black to-black z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#FF6EC7]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6EC7]/10 to-purple-500/10 mb-6">
              <BriefcaseIcon className="w-5 h-5 text-[#FF6EC7]" />
              <span className="text-sm font-medium text-[#FF6EC7]">Join Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF6EC7] to-purple-500 bg-clip-text text-transparent">
              Summer 2025 Internship
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We're thrilled that you're interested in joining Blitz as an intern! Let's build something amazing together.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 shadow-xl shadow-pink-500/10 border border-gray-800">
            {submitted ? (
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#FF6EC7] to-purple-500 flex items-center justify-center mx-auto mb-6">
                  <SparklesIcon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
                <p className="text-gray-400 mb-6">
                  We'll review your application and get back to you soon.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Submit Another Application
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-[#FF6EC7] mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF6EC7] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF6EC7] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF6EC7] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="currentRole" className="block text-sm font-medium mb-1">
                        Current Role / College / Year of Study *
                      </label>
                      <input
                        type="text"
                        id="currentRole"
                        value={formData.currentRole}
                        onChange={e => setFormData(prev => ({ ...prev, currentRole: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF6EC7] transition-colors"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="linkedin" className="block text-sm font-medium mb-1">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        id="linkedin"
                        value={formData.linkedin}
                        onChange={e => setFormData(prev => ({ ...prev, linkedin: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF6EC7] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Team Selection Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-[#FF6EC7] mb-4">Team Selection</h3>
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Which team(s) are you applying for? *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {teams.map(team => (
                        <label key={team} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-[#FF6EC7] transition-colors cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.teams.includes(team)}
                            onChange={() => handleTeamChange(team)}
                            className="rounded border-gray-700 text-[#FF6EC7] focus:ring-[#FF6EC7]"
                          />
                          <span className="text-sm">{team}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Application Details Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-[#FF6EC7] mb-4">Application Details</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="whyJoin" className="block text-sm font-medium mb-1">
                        Why do you want to join the team(s) you've selected? *
                      </label>
                      <textarea
                        id="whyJoin"
                        value={formData.whyJoin}
                        onChange={e => setFormData(prev => ({ ...prev, whyJoin: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF6EC7] transition-colors"
                        rows={4}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium mb-1">
                        Past experiences or relevant skills *
                      </label>
                      <textarea
                        id="experience"
                        value={formData.experience}
                        onChange={e => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF6EC7] transition-colors"
                        rows={4}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="contribution" className="block text-sm font-medium mb-1">
                        What would you bring to the team(s)? *
                      </label>
                      <textarea
                        id="contribution"
                        value={formData.contribution}
                        onChange={e => setFormData(prev => ({ ...prev, contribution: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF6EC7] transition-colors"
                        rows={4}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Commitment Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-[#FF6EC7] mb-4">Time Commitment</h3>
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Hours per week commitment *
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {['Less than 5', '5–10', '10–15'].map(hours => (
                        <label key={hours} className="flex items-center justify-center p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-[#FF6EC7] transition-colors cursor-pointer">
                          <input
                            type="radio"
                            name="hoursPerWeek"
                            value={hours}
                            checked={formData.hoursPerWeek === hours}
                            onChange={e => setFormData(prev => ({ ...prev, hoursPerWeek: e.target.value }))}
                            className="border-gray-700 text-[#FF6EC7] focus:ring-[#FF6EC7]"
                            required
                          />
                          <span className="text-sm ml-2">{hours}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Additional Information Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-[#FF6EC7] mb-4">Additional Information</h3>
                  <div>
                    <label htmlFor="questions" className="block text-sm font-medium mb-1">
                      Any questions or anything else you'd like us to know?
                    </label>
                    <textarea
                      id="questions"
                      value={formData.questions}
                      onChange={e => setFormData(prev => ({ ...prev, questions: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF6EC7] transition-colors"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Upload Your Resume (PDF only) *
                    </label>
                    <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-lg hover:border-[#FF6EC7] transition-colors">
                      <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex text-sm text-gray-400">
                          <label htmlFor="resume" className="relative cursor-pointer rounded-md font-medium text-[#FF6EC7] hover:text-[#FF6EC7]/80">
                            <span>Upload a file</span>
                            <input
                              id="resume"
                              type="file"
                              accept=".pdf"
                              className="sr-only"
                              required
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF up to 100MB</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="primary" size="lg" fullWidth type="submit" className="mt-8">
                  Submit Application
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
                  <ShieldCheckIcon size={14} />
                  <span>Your data is secure and will never be sold</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}; 