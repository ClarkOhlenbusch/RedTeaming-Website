import { Shield, Zap, Target, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 dark:text-white mb-4">About RedTeaming</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A modern consulting firm helping organizations solve complex challenges across security, strategy, and
            infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-6">Our Story</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Founded by engineers and consultants who saw a gap in advisory services that merged business strategy with
              real-world technical execution, RedTeaming has grown to become a trusted partner for organizations
              navigating digital transformation.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We combine the scale and polish of a big firm with the agility and depth of a niche partner. Our mission
              is to guide organizations through digital transformation with confidence—especially in high-risk areas
              like cybersecurity and wireless infrastructure.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <div className="bg-red-700/10 p-3 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-red-700" />
                </div>
                <h4 className="text-lg font-bold text-navy-800 dark:text-white mb-2">Mission</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Help organizations navigate complexity through advisory services in strategy, risk, and technology.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <div className="bg-red-700/10 p-3 rounded-full mb-4">
                  <Target className="h-8 w-8 text-red-700" />
                </div>
                <h4 className="text-lg font-bold text-navy-800 dark:text-white mb-2">Vision</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Become a trusted partner known for combining technical depth with strategic insight across industries.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <div className="bg-red-700/10 p-3 rounded-full mb-4">
                  <Zap className="h-8 w-8 text-red-700" />
                </div>
                <h4 className="text-lg font-bold text-navy-800 dark:text-white mb-2">Approach</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Deliver practical, measurable value with a confident, strategic, and technically credible voice.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <div className="bg-red-700/10 p-3 rounded-full mb-4">
                  <Users className="h-8 w-8 text-red-700" />
                </div>
                <h4 className="text-lg font-bold text-navy-800 dark:text-white mb-2">Clients</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  We work across industries including Government, Enterprise, Healthcare, and Defense.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-navy-800 text-white rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-8 border-b md:border-b-0 md:border-r border-white/10">
              <h4 className="text-xl font-bold mb-3">Strategic Insight</h4>
              <p className="text-white/80">Grounded in execution experience, we bring clarity to complex decisions.</p>
            </div>
            <div className="p-8 border-b md:border-b-0 md:border-r border-white/10">
              <h4 className="text-xl font-bold mb-3">Trustworthy Guidance</h4>
              <p className="text-white/80">Reliable expertise in high-stakes environments where security matters.</p>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold mb-3">Deep Specialization</h4>
              <p className="text-white/80">Technical excellence in cybersecurity and wireless technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
