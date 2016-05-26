app.service("articleService", ['$rootScope', function($rootScope){
    "use strict";
      
    this.news = [];
    this.articles = [];
    this.separator = '-';


    this.news.push(
        {
            "title":    "15¢ gray Large Queen Canadian stamp will star at the next auction",
            "date":     "Feb 18, 2016",
            "numDate":  "2016-02-18",
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
          "numDate":  "2016-02-19",
          "bodyText": "United Nations issued special stamps to celebrate the diversity of the LGBT community and to promotes the UN Free & Equal campaign for LGBT equality.",
          "referer":  "Philatelynews.com",
          "src":      "http://philatelynews.com/un-special-stamps-to-celebrate-the-diversity-of-the-lgbt-community/",
          "image":    {
              "src":          "assets/img/articles/LGBT-diversity-cropped.jpg",
              "alt":          "Queen Canadian Stamp",
              "position":     "bottom"
          },
          "options":  {

          }
      }
    );

    this.news.push(
        {
            "title":    "Australian Decimal currency 50 years celebrated through Special stamp",
            "date":     "Feb 15, 2016",
            "numDate":  "2016-02-15",
            "bodyText": "Australia post marks 50 years of Australian Decimal currency that supplanted pounds, shillings and pence in Australia on 14 February 1966.The $1 stamp features the images of new $1 banknote and coin along with the image of £1 banknote which was replaced.On 14 February 1966, one era ended and another began when Australia replaced British-style currency with decimal notes and coins.",
            "referer":  "Philatelynews.com",
            "src":      "http://philatelynews.com/australian-decimal-currency/",
            "image":    {
                "src":          "assets/img/articles/australia-cropped.jpg",
                "alt":          "",
                "position":     "bottom"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "USPS promises the moon with global forever stamp",
            "date":     "Jan 12, 2016",
            "numDate":  "2016-01-12",
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
            "numDate":  "2016-02-19",
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
            "numDate":  "2016-02-09",
            "bodyText": "Year of the Monkey Forever stamp issued by U.S. Postal Service to mark the beginning of the Lunar New Year, one of the most popular and exciting holidays of the year. Year of the Monkey is the ninth of 12 stamps issued by USPS in the Celebrating Lunar New Year",
            "referer":  "Philatelynews.com",
            "src":      "http://philatelynews.com/usa-year-of-the-monkey-forever-stamp/",
            "image":    {
                "src":          "assets/img/articles/china-monkey-cropped.jpg",
                "alt":          "",
                "position":     "bottom"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "Canada Post celebrates International Women’s Day with special stamp",
            "date":     "Mar 11, 2016",
            "numDate":  "2016-03-11",
            "bodyText": "Canada Post issued a special stamp on International Women’s Day, celebrating the centenary of women’s suffrage in Canada. The special stamp issue marks 100 years since the first Canadian women won the right to vote. ",
            "referer":  "Philatelynews.com",
            "src":      "http://philatelynews.com/canada-post-celebrates-international-womens-day-special-stamp/",
            "image":    {
                "src":          "assets/img/articles/womensDay.jpg",
                "alt":          "womensDay",
                "position":     "bottom"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "Born March 13: Charles Grey",
            "date":     "Mar 13, 2016",
            "numDate":  "2016-03-13",
            "bodyText": "As prime minister of the United Kingdom, Charles Grey oversaw the 1832 reforms that included the abolition of slavery.",
            "referer":  "Linns.com",
            "src":      "http://www.linns.com/news/world-stamps-postal-history/2016/march/born-march-13--charles-grey.html",
            "image":    {
                "src":          "assets/img/articles/charlesGrey.jpg",
                "alt":          "Charles Grey",
                "position":     "bottom"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "New philatelic issue on nature released by Guernsey Post",
            "date":     "Feb 25, 2016",
            "numDate":  "2016-02-25",
            "bodyText": "The Philippine Eagle that aapered on a new stamp issue by Guernsey Post has been illustrated by world renowned wildlife artist, Joel Kirk, who has worked on all of our endangered species stamps",
            "referer":  "StampNews.com",
            "src":      "http://www.stampnews.com/stamps/stamps_2016/stamp_the-philippine-eagle-as-one-of-the-worlds-largest-and-most-powerful-ones-new-philatelic-issue-on-nature-released-by-guernsey-post.html",
            "image":    {
                "src":          "assets/img/articles/eagleStamp.jpg",
                "alt":          "Philippine Eagle",
                "position":     "bottom"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "Book of exhibiting tips set for WSS-NY 2016 release",
            "date":     "Mar 10, 2016",
            "numDate":  "2016-03-10",
            "bodyText": "After a 28-year publishing hiatus, the AAPE will come out with a 200-page, eight-chapter publication in early June at World Stamp Show-NY 2016.",
            "referer":  "Linns.com",
            "src":      "http://www.linns.com/news/us-stamps-postal-history/2016/march/the-american-association-of-philatelic-exhibitors-first-book-in-28-years-will-debut-at-worlds-stamp-show.html",
            "image":    {
                "src":          "assets/img/articles/tipsBook.jpg",
                "alt":          "",
                "position":     "bottom"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "When Hawaii Was a Kingdom…Stamps of that time are expected to fetch US$2 million at auction!",
            "date":     "May 21, 2016",
            "numDate":  "2016-05-21",
            "bodyText": "It contains 10 examples of very rare Hawaiian Missionary stamps issued in 1851 ‒ some unused, some cancelled and on original envelopes, some containing letters. A 13-cent unused Missionary in near mint condition is expected to bring $50,000 to $75,000.",
            "referer":  "StampNews.com",
            "src":      "http://www.stampnews.com/stamps/stamps_2016/stamp_when-hawaii-was-a-kingdomstamps-of-that-time-are-expected-to-fetch-us2-million-at-auction.html",
            "image":    {
                "src":          "assets/img/articles/hawaii.jpg",
                "alt":          "",
                "position":     "bottom"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "Surprising and original – contemporary art of Finland! Four bright stamps unveiled",
            "date":     "May 23, 2016",
            "numDate":  "2016-05-23",
            "bodyText": "Finnish contemporary art boasts with its originality and unusual forms – from abstract to the most sophisticated ones.",
            "referer":  "StampNews.com",
            "src":      "http://www.stampnews.com/stamps/stamps_2016/stamp_surprising-and-original-contemporary-art-of-finland-four-bright-stamps-unveiled.html",
            "image":    {
                "src":          "assets/img/articles/art.jpg",
                "alt":          "",
                "position":     "bottom"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "April financial results better than U.S. Postal Service predicted",
            "date":     "May 25, 2016",
            "numDate":  "2016-05-25",
            "bodyText": "Some mailers are saying that the end of the temporary surcharge on stamp prices appears to have helped the United States Postal Service’s bottom line.",
            "referer":  "Linns.com",
            "src":      "http://www.linns.com/news/postal-updates/2016/may/april-financial-results-united-states-postal-service.html",
            "image":    {
                "src":          "assets/img/articles/uspsFinance.jpg",
                "alt":          "",
                "position":     "bottom"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "Ropex stamp show postmarks recall 1934 National Parks commemoratives: Postmark Pursuit",
            "date":     "May 16, 2016",
            "numDate":  "2016-05-16",
            "bodyText": "The National Park Service is celebrating its 100th anniversary in 2016, and the show will celebrate with postmarks that recall the designs of the popular National Parks commemorative stamps issued in 1934.",
            "referer":  "Linns.com",
            "src":      "http://www.linns.com/news/postal-updates/2016/may/ropex-stamp-show-postmarks-national-parks.html",
            "image":    {
                "src":          "assets/img/articles/yosemite.jpg",
                "alt":          "",
                "position":     "bottom"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "The Sand Will Remember. Memorial Day 2016 marked with a new stamp",
            "date":     "May 6, 2016",
            "numDate":  "2016-05-06",
            "bodyText": "The letter card, cover and stamp – all of which are special and unique to Memorial Day – constitute the basis of a sensitive, original and extraordinary tradition that came into being following the War of Independence.",
            "referer":  "StampNews.com",
            "src":      "http://www.stampnews.com/stamps/stamps_2016/stamp_the-sand-will-remember-memorial-day-2016-marked-with-a-new-stamp.html",
            "image":    {
                "src":          "assets/img/articles/memorialSands.jpg",
                "alt":          "",
                "position":     "bottom"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "Stolen famous “inverted Jenny” stamp resurfaces in New York City! Stamp collectors are amazed…",
            "date":     "April 21, 2016",
            "numDate":  "2016-04-21",
            "bodyText": "In 1955, a block of four rare postage stamps was stolen from a display case at a convention. Over the years, two were recovered, but there were no signs of the others ‒ until now.",
            "referer":  "StampNews.com",
            "src":      "http://www.stampnews.com/stamps/stamps_2016/stamp_stolen-famous-inverted-jenny-stamp-resurfaces-in-new-york-city-stamp-collectors-are-amazed.html",
            "image":    {
                "src":          "assets/img/articles/jennyFound.jpg",
                "alt":          "",
                "position":     "bottom"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "55th anniversary of the first human flight into space… One bright stamp released by Russian Post",
            "date":     "April 17, 2016",
            "numDate":  "2016-04-17",
            "bodyText": "2016 marks the 55th anniversary of the first human flight into space, a remarkable date for the Russian cosmonautics. To commemorate this occasion Rusmarka has released a special commemorative stamp depicting the portrait of world-famous Yuri Gagarin.",
            "referer":  "StampNews.com",
            "src":      "http://www.stampnews.com/stamps/stamps_2016/stamp_55th-anniversary-of-the-first-human-flight-into-space-one-bright-stamp-released-by-russian-post.html",
            "image":    {
                "src":          "assets/img/articles/spaceFlight.jpg",
                "alt":          "",
                "position":     "bottom"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "Rio 2016 Olympic stamps : Exploring the world of Sports",
            "date":     "May 25, 2016",
            "numDate":  "2016-05-25",
            "bodyText": "Olympic Stamps are very favourite among collectors and with the upcoming Summer Olympics we bring these complete collection of Rio 2016 Olympic stamps.",
            "referer":  "PhilatelyNews.com",
            "src":      "http://philatelynews.com/rio-2016-olympic-stamps-collection/",
            "image":    {
                "src":          "assets/img/articles/rio.jpg",
                "alt":          "",
                "position":     "bottom"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "Star Trek 50th anniversary stamp collection from Canada post",
            "date":     "May 6, 2016",
            "numDate":  "2016-05-06",
            "bodyText": "Canada post issued a unique collection of Star Trek 50th anniversary stamp depicting cast members and battle cruiser from Star Trek: The Original Series.The products available for Star Trek 50th anniversary stamp are prestige booklet, official first day covers, souvenir sheets, uncut press sheets, panes, and booklets, fans will discover a galaxy of memorabilia, including postcards and stamp dispensers.",
            "referer":  "PhilatelyNews.com",
            "src":      "http://philatelynews.com/star-trek-50th-anniversary-stamp-collection-canada-post/",
            "image":    {
                "src":          "assets/img/articles/starTrek.jpg",
                "alt":          "",
                "position":     "bottom"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "USPS to celebrate 100th Anniversary of National Park Service with Forever Stamps",
            "date":     "Apr 25, 2016",
            "numDate":  "2016-04-25",
            "bodyText": "The U.S. Postal Service will be issuing a pane of National Park Service Forever Stamps celebrating the 100th Anniversary of NPS on August 25, 2016.The stunning Forever stamps depicting 16 examples of US national treasures will be issued on June 2, 2016.",
            "referer":  "PhilatelyNews.com",
            "src":      "http://philatelynews.com/usps-celebrate-100th-anniversary-national-park-service-forever-stamps/",
            "image":    {
                "src":          "assets/img/articles/NatlParks.jpg",
                "alt":          "",
                "position":     "bottom"
            },
            "options":  {

            }
        }
    );

    this.news.push(
        {
            "title":    "100 years of Albert Einstein General theory of relativity",
            "date":     "Mar 20, 2016",
            "numDate":  "2016-03-20",
            "bodyText": "The Croatian Post Ltd. Mostar issued a commemorative stamp to celebrate 100 years of Albert Einstein General theory of relativity. The stamp features the most famous photo of Albert Einstein and his famous equation E = mc².",
            "referer":  "PhilatelyNews.com",
            "src":      "http://philatelynews.com/100-years-albert-einstein-general-theory-relativity/",
            "image":    {
                "src":          "assets/img/articles/einstein.jpg",
                "alt":          "",
                "position":     "bottom"
            },
            "options":  {

            }
        }
    );

    this.news.reverse();
// Blank Tempate: 

    // this.news.push(
    //     {
    //         "title":    "",
    //         "date":     "Feb 9, 2016",
    //         "numDate":  "2016-02-09",
    //         "bodyText": "",
    //         "referer":  "",
    //         "src":      "",
    //         "image":    {
    //             "src":          "assets/img/articles/###",
    //             "alt":          "",
    //             "position":     "top"
    //         },
    //         "options":  {

    //         }
    //     }
    // );
   


//////  ARTICLES  /////

    this.articles.push(
        {
            "title":    "Awards won at NOVAPEX 2016",
            "date":     "",
            "bodyText": "",
            "thumbSrc": "assets/articles/2016NovapexPalmares.png",
            "src":      "assets/articles/NOVAPEX 2016 Palmares.pdf",
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
            "src":      "assets/articles/novapex14_awards.pdf",
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

   


    this.getSortDate = function(datestring){
        var splitDate = datestring.split(that.separator);
        return new Date(splitDate[0], splitDate[1], splitDate[2]);
    }

    var that = this;
 
}]);