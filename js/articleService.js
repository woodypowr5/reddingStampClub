app.service("articleService", ['$rootScope', function($rootScope){
    "use strict";
      
    this.news = [];
    this.articles = [];

    this.news.push(
        {
            "title":    "15¢ gray Large Queen Canadian stamp will star at the next auction",
            "date":     "Feb 18, 2016",
            "bodyText": "The Canada 15¢ gray Large Queen stamp from the 1868 is unused and shows a cleans and complete letter of the rare ”Alexr. Pirie & Sons” script watermark. It is believed that this stamp is just one if six unused examples known to exist.",
            "referer":  "StampNews.com",
            "src":      "http://www.stampnews.com/stamps/stamps_2016/stamp_15%C2%A2-gray-large-queen-canadian-stamp-will-star-at-the-next-auction-collectors-are-eager-to-get-it.html",
            "image":    {
                "src":          "assets/img/articles/queen-canadian.jpg",
                "alt":          "Queen Canadian Stamp",
                "position":     "background"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
          "title":    "UN Special stamps to celebrate the diversity of the LGBT community",
          "date":     "Feb 19, 2016",
          "bodyText": "United Nations issued special stamps to celebrate the diversity of the LGBT community and to promotes the UN Free & Equal campaign for LGBT equality.",
          "referer":  "Philatelynews.com",
          "src":      "http://philatelynews.com/un-special-stamps-to-celebrate-the-diversity-of-the-lgbt-community/",
          "image":    {
              "src":          "assets/img/articles/LGBT-diversity-cropped.jpg",
              "alt":          "Queen Canadian Stamp",
              "position":     "top-inset"
          },
          "options":  {

          }
      }
    );

    this.news.push(
        {
            "title":    "Australian Decimal currency 50 years celebrated through Special stamp",
            "date":     "Feb 15, 2016",
            "bodyText": "Australia post marks 50 years of Australian Decimal currency that supplanted pounds, shillings and pence in Australia on 14 February 1966.The $1 stamp features the images of new $1 banknote and coin along with the image of £1 banknote which was replaced.On 14 February 1966, one era ended and another began when Australia replaced British-style currency with decimal notes and coins.",
            "referer":  "Philatelynews.com",
            "src":      "http://philatelynews.com/australian-decimal-currency/",
            "image":    {
                "src":          "assets/img/articles/australia-cropped.jpg",
                "alt":          "",
                "position":     "top-inset"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "One time I farted",
            "date":     "Feb 02, 2016",
            "bodyText": "Same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is",
            "referer":  "Philatelynews.com",
            "src":      "",
            "image":    {
                "src":          "",
                "alt":          "",
                "position":     "none"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "USPS promises the moon with global forever stamp",
            "date":     "Jan 12, 2016",
            "bodyText": "The newest round global forever stamp from the United States Postal Service pictures Earth’s moon. Features of the lunar surface are easily seen in the detailed image created from an existing photograph by Beth Swanson. The stamp and pane selvage were designed by Greg Breeding. William J. Gicker was the USPS art director for this issue.",
            "referer":  "Linns.com",
            "src":      "https://www.linns.com/news/us-stamps-postal-history/2016/february/usps-promises-the-moon-with-global-forever-stamp.html",
            "image":    {
                "src":          "assets/img/articles/global-forever-cropped.jpg",
                "alt":          "",
                "position":     "bottom"
            },
            "options":  {
                "width":    ""
            }
        }
    );

    this.news.push(
        {
            "title":    "Upright Jenny Invert pane of six sells for $59,205 in Maine auction",
            "date":     "Feb 19, 2016",
            "bodyText": "Waterville, Maine, bookseller Robert Sezak auctioned his pane of the upright $2 Jenny Invert stamp through James D. Julia Auctioneers. A high bid of $50,000 won the lot.",
            "referer":  "Linns.com",
            "src":      "https://www.linns.com/news/us-stamps-postal-history/2016/february/upright-jenny-invert-pane-of-six-sells-for--59-205-in-maine-auct.html",
            "image":    {
                "src":          "assets/img/articles/jenny-cropped.jpg",
                "alt":          "",
                "position":     "bottom"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "USA Year of the Monkey Forever stamp to Celebrate Lunar New Year",
            "date":     "Feb 9, 2016",
            "bodyText": "Year of the Monkey Forever stamp issued by U.S. Postal Service to mark the beginning of the Lunar New Year, one of the most popular and exciting holidays of the year. Year of the Monkey is the ninth of 12 stamps issued by USPS in the Celebrating Lunar New Year",
            "referer":  "Philatelynews.com",
            "src":      "http://philatelynews.com/usa-year-of-the-monkey-forever-stamp/",
            "image":    {
                "src":          "assets/img/articles/china-monkey-cropped.jpg",
                "alt":          "",
                "position":     "top"
            },
            "options":  {

            }
        }
    );
   

    this.articles.push(
        {
            "title":    "Awards won at NOVAPEX 2014",
            "date":     "",
            "bodyText": "",
            "thumbSrc": "assets/articles/novapex-awards.png",
            "src":      "assets/articles/novapex14_awards.docx",
            "options":  {

            }
        }
    );
    this.articles.push(
        {
            "title":    "How to Remove Adhesive from Stamps",
            "date":     "",
            "bodyText": "",
            "thumbSrc": "assets/articles/remove-adhesiveBW.png",
            "src":      "assets/articles/removing_self_adhesive_stamps.pdf",
            "options":  {

            }
        }
    );

    var that = this;
 
}]);