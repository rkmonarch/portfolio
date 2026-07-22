const sections = [
  {
    title: "Information We Collect",
    body: (
      <>
        <p>Lads may collect the following information:</p>
        <ul>
          <li>
            Account information, such as name, email address, profile photo,
            and sign-in method.
          </li>
          <li>
            Profile information users choose to provide, such as date of birth,
            gender, height, weight, and calorie goal.
          </li>
          <li>
            Room information, such as room names, invite codes, room
            membership, comments, reactions, challenges, and activity shared
            inside a room.
          </li>
          <li>
            Workout and activity information, such as activity type, workout
            time, duration, calories, distance, heart rate data, heart-rate
            zones, and strength workout logs including sets, reps, weight, and
            difficulty.
          </li>
          <li>
            Health and wearable information from connected providers, only
            after the user gives permission. This may include WHOOP recovery,
            strain, cycles, sleep, workouts, and profile identifier data, and
            Apple Health steps, active energy, distance, heart rate, HRV,
            oxygen saturation, sleep, and workouts.
          </li>
          <li>
            App usage and device information used for basic analytics,
            debugging, performance monitoring, and notifications.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "How We Use Information",
    body: (
      <>
        <p>Lads uses collected information to:</p>
        <ul>
          <li>Create and manage user accounts.</li>
          <li>
            Let users create, join, leave, and participate in private rooms.
          </li>
          <li>
            Show room activity, workouts, comments, reactions, leaderboards,
            and challenges.
          </li>
          <li>
            Sync activity from WHOOP and Apple Health when users connect those
            services.
          </li>
          <li>
            Generate daily progress, workout recommendations, recovery
            insights, and adaptive strength coaching.
          </li>
          <li>
            Send optional notifications about room activity and fitness
            progress.
          </li>
          <li>Improve app reliability, security, and product quality.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Health Data and Wearable Data",
    body: (
      <>
        <p>
          Health data is used only to power Lads features. Lads does not sell
          health data. Lads does not use health data for advertising.
        </p>
        <p>
          Users choose whether to connect WHOOP or Apple Health. If a user does
          not connect a health provider, Lads can still be used with limited
          functionality. Users can disconnect WHOOP from the app. Apple Health
          permissions are controlled by iOS, and users can manage or revoke
          them in the Apple Health app or iOS Settings.
        </p>
        <p>
          Some synced workout activity may be visible to other members of the
          rooms the user joins. Private health metrics such as recovery, sleep,
          HRV, and personal profile details are not shown publicly unless they
          are part of a feature the user chooses to use.
        </p>
      </>
    ),
  },
  {
    title: "AI Coaching",
    body: (
      <>
        <p>
          Lads uses AI-powered features to generate coaching insights, workout
          plans, summaries, and recommendations. To do this, limited relevant
          context may be sent to secure backend functions, such as recent
          workout history, recovery context, sleep context, and strength workout
          logs.
        </p>
        <p>
          AI is used to support coaching and accountability. It is not a
          medical provider, and recommendations should not replace professional
          medical advice.
        </p>
      </>
    ),
  },
  {
    title: "How Information Is Shared",
    body: (
      <>
        <p>Lads may share information in the following limited ways:</p>
        <ul>
          <li>
            With room members: selected workout activity, room participation,
            comments, reactions, challenges, and leaderboard information may be
            visible to other members of the same room.
          </li>
          <li>
            With service providers: Lads uses trusted infrastructure providers
            such as Supabase for authentication, database, storage, row-level
            security, and backend functions; Firebase for push notifications;
            analytics providers for basic app usage; and AI model providers
            through backend functions for coaching features.
          </li>
          <li>
            With connected health providers: WHOOP and Apple Health data is
            accessed only after the user authorizes the connection.
          </li>
          <li>
            For legal or safety reasons: Lads may disclose information if
            required by law or needed to protect users, the app, or others.
          </li>
        </ul>
        <p>Lads does not sell personal information.</p>
      </>
    ),
  },
  {
    title: "Data Storage and Security",
    body: (
      <>
        <p>
          Lads stores app data in Supabase with row-level security rules
          designed to restrict access by user identity and room membership.
          WHOOP tokens are stored securely on device and mirrored to backend
          storage only when needed for server-side syncing. The client cannot
          read server-side WHOOP tokens back from the database.
        </p>
        <p>
          No system can guarantee perfect security, but Lads uses reasonable
          technical safeguards to protect user data.
        </p>
      </>
    ),
  },
  {
    title: "User Choices",
    body: (
      <>
        <p>Users can:</p>
        <ul>
          <li>
            Skip room creation during onboarding and create or join rooms later
            from the Lads screen.
          </li>
          <li>Leave rooms.</li>
          <li>Disconnect WHOOP.</li>
          <li>
            Manage Apple Health permissions in iOS Settings or the Apple Health
            app.
          </li>
          <li>Turn off notifications.</li>
          <li>Update profile details.</li>
          <li>
            Request account or data deletion by contacting the Lads team.
          </li>
        </ul>
        <p>
          Signing out stops local app access on the device, but it does not
          automatically delete the user&apos;s backend account or historical
          room activity.
        </p>
      </>
    ),
  },
  {
    title: "Data Retention",
    body: (
      <p>
        Lads keeps user data for as long as needed to provide the app
        experience, maintain room history, comply with legal obligations,
        resolve disputes, and improve reliability. Users may request deletion
        of their account or personal data.
      </p>
    ),
  },
  {
    title: "Children",
    body: <p>Lads is not intended for children under 13 years old.</p>,
  },
  {
    title: "Changes to This Policy",
    body: (
      <p>
        Lads may update this Privacy Policy as the app changes. If material
        changes are made, the effective date will be updated.
      </p>
    ),
  },
  {
    title: "Contact",
    body: (
      <p>
        For privacy questions, data requests, or account deletion requests,
        contact the Lads team through the app or the project owner.
      </p>
    ),
  },
];

export default function LadsPrivacyPolicy() {
  return (
    <article className="pt-20 sm:pt-28">
      <header>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
          Privacy Policy for Lads
        </h1>
        <p className="mt-4 text-sm text-ink-muted">
          Effective date: July 22, 2026
        </p>
        <p className="mt-8 text-[17px] text-ink-secondary leading-relaxed">
          Lads is a private fitness app for small groups of friends. The app
          helps users share selected fitness activity with their rooms, track
          health and workout progress, and receive coaching suggestions. This
          Privacy Policy explains what information Lads collects, how it is
          used, and what choices users have.
        </p>
      </header>

      <div className="mt-12 space-y-12">
        {sections.map((section) => (
          <section key={section.title} className="border-t border-line pt-8">
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              {section.title}
            </h2>
            <div className="mt-4 space-y-4 text-[15px] text-ink-secondary leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
              {section.body}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
