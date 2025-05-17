import React from "react";

const teamMembers = [
  {
    name: "Ananya Pal",
    role: "M.Tech",
    image:
      "https://res.cloudinary.com/dtgkwatby/image/upload/v1747458208/Ananya_Pal_1_-min_ncxdqt.jpg",
  },
  {
    name: "Basati Sivakrishna",
    role: "M.Tech",
    image:
      "https://res.cloudinary.com/dtgkwatby/image/upload/v1747458208/BASATI_SIVAKRISHNA_2_-min_tcmtxo.jpg",
  },
  {
    name: "Bharath S",
    role: "M.Tech",
    image:
      "https://res.cloudinary.com/dtgkwatby/image/upload/v1747458211/Bharath_S_1_-min_vx5q5l.jpg",
  },
  {
    name: "Bishwapa Sanyal",
    role: "M.Tech",
    image:
      "https://res.cloudinary.com/dtgkwatby/image/upload/v1747458208/Bishwapa_Sanyal_2_-min_spfdym.jpg",
  },
  {
    name: "Deepak",
    role: "M.Tech",
    image:
      "https://res.cloudinary.com/dtgkwatby/image/upload/v1747458208/Deepak_2_-min_o2xseh.jpg",
  },
  {
    name: "Elizabeth Kuruvilla",
    role: "M.Tech",
    image:
      "https://res.cloudinary.com/dtgkwatby/image/upload/v1747458212/Elizabeth_Kuruvilla_2_-min_dkhq3h.jpg",
  },
  {
    name: "Kushal Gowda",
    role: "M.Tech",
    image:
      "https://res.cloudinary.com/dtgkwatby/image/upload/v1747458209/Kushal_Gowda_1_-min_ztgquz.jpg",
  },
  {
    name: "Meenakshi Shankar",
    role: "M.Tech",
    image:
      "https://res.cloudinary.com/dtgkwatby/image/upload/v1747458209/Meenakshi_Shankar_1_-min_ogz7rz.jpg",
  },
  {
    name: "Narayanan Nampoothiry V",
    role: "M.Tech",
    image:
      "https://res.cloudinary.com/dtgkwatby/image/upload/v1747459707/DSC00646-min_l2vhga.jpg",
  },
  {
    name: "Nooramol Karimpanakkal",
    role: "M.Tech",
    image:
      "https://res.cloudinary.com/dtgkwatby/image/upload/v1747458209/Nooramol_Karimpanakkal-min_wxtfvc.jpg",
  },
  {
    name: "Onkar Joshi",
    role: "Project Assistant",
    image:
      "https://res.cloudinary.com/dtgkwatby/image/upload/v1747458210/Onkar_joshi_1_-min_elqaut.jpg",
  },
  {
    name: "Rahul Balout",
    role: "M.Tech",
    image:
      "https://res.cloudinary.com/dtgkwatby/image/upload/v1747458210/Rahul_Balout_1_-min_xpl2b8.jpg",
  },
  {
    name: "Rahul Chakraborty",
    role: "M.Tech",
    image:
      "https://res.cloudinary.com/dtgkwatby/image/upload/v1747458210/Rahul_Chakraborty_1_-min_eqizdm.jpg",
  },
  {
    name: "Saibhanumathi Kalangi",
    role: "M.Tech",
    image:
      "https://res.cloudinary.com/dtgkwatby/image/upload/v1747458211/Saibhanumathi_Kalangi_1_-min_smj85u.jpg",
  },
  {
    name: "Shivam Kar",
    role: "M.Tech",
    image:
      "https://res.cloudinary.com/dtgkwatby/image/upload/v1747458211/Shivam_Kar_1_-min_heiewh.jpg",
  },
  {
    name: "Toms Jiji Varghese",
    role: "M.Tech",
    image:
      "https://res.cloudinary.com/dtgkwatby/image/upload/v1747458212/Toms_Jiji_Varghese_1_-min_cc6obf.jpg",
  },
  {
    name: "Ujjwal Chaudhary",
    role: "M.Tech",
    image:
      "https://res.cloudinary.com/dtgkwatby/image/upload/v1747458212/Ujjwal_Chaudhary_1_-min_fdrjfi.jpg",
  },
  // {
  //   name:"Vibhore Jain",
  //   role:"PHD",
  //   image:"https://res.cloudinary.com/dosnuagvu/image/upload/v1740509636/Vibhore_1_osfsap.jpg"
  // }
];

const Team = () => {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030418] to-[#0a0b2e] opacity-90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The brilliant minds behind our success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group [perspective:1000px]">
              <div className="relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] h-75">
                {/* Front of card */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl bg-[#0a0b2e]/80 p-6 backdrop-blur-sm border border-white/10 transition-all duration-500">
                  <div className="mb-4 h-42">
                    <div className="h-full w-full overflow-hidden rounded-xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-contain object-center"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-400">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#0a0b2e]/80 p-6 backdrop-blur-sm border border-white/10 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center text-center">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-purple-400 mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm">
                    "Passionate about innovation and technology"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
